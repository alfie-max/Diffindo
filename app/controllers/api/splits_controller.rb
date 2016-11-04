class Api::SplitsController < ApplicationController

  def create
    @new_split = Split.new(split_params)
    amount = calculate_split_amount
    if @new_split.save
      render json: ["Split created"], status: 200
    else
      render json: @new_split.errors.full_messages, status: 422
    end
  end

  def update
    split = Split.find(params[:id])
    if split.update(split_params)
      render json: ["Split updated"], status: 200
    else
      render json: split.errors.full_messages, status: 422
    end
  end

  def destroy
    #Only when a split_with user is removed from the split option
    split = split.find(params[:id])
    if split
      split.delete
      render json: ["Split deleted"], status: 200
    else
      render json: ["Split not found"], status: 422
    end
  end

  private

  def split_params
    params.require(:split).permit(:bill_id, :user_id)
  end

end
