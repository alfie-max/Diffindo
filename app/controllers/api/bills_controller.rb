class Api::BillsController < ApplicationController

  before_action :require_signed_in!
  before_action :require_involved_user!, only: [:show, :update, :destroy]

    def index
      #Only bills which the user is involved with and/or is the author should be displayed.
      @bills = current_user.bills_involved_in
      render "api/bills/index"
    end


    def show
      @bill = Bill.find(params[:id])

      if @bill.split_with.include?(current_user)
        render "api/bills/show"
      else
        render json: ["You can not view this bill"], status: 403
      end
    end


    def create
      @bill = Bill.new(bill_params)
      @bill.author_id = current_user.id
      if @bill.save!
        render "api/bills/show"
      else
        render json: @bill.errors.full_messages, status: 422
      end
    end


    def update
      @bill = Bill.find(params[:id])
      if @bill.update!(bill_params)
        render "api/bills/show"
      else
        render json: @bill.errors.full_messages, status: 422
      end
    end

    def destroy
      @bill = Bill.find(params[:id])
      if @bill
        @bill.delete
        render json: ["Bill deleted"], status: 200
      else
        render json: ["Bill not found"], status: 422
      end
    end

    private

    # In order to use splits_attributes, you need to specify which fields should be whitelisted. Include :id too as per http://edgeapi.rubyonrails.org/classes/ActionController/StrongParameters.html

    # When we update the Bill, there are 3 possible scenarios in terms of splits:
      # • a split is added. In this case, the split_attribute will have :user_id and :amount;
      # • a split is changed. In this case, the split_attribute will have :id, :user_id and :amount;
      # • a split is removed (checked box is unchecked). In this case, the split_attribute will have :id and :_destroy set to true. We don't need to supply the rest (:user_id and :amount)

    def bill_params
      params.require(:bill).permit(:title, :amount, :category_id,
        :payer_id, :date, :doc_url, :split_type, splits_attributes: [:id, :user_id, :amount, :_destroy])
    end

    def require_involved_user!
      # Make sure current_user can RUD the bill
      return if current_user.bills_involved_in.include?(Bill.find(params[:id]))

      render json: ["You don't have access to this bill"], status: 403
    end


end
