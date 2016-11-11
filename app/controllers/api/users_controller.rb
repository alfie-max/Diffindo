class Api::UsersController < ApplicationController


#Have to check if user exists. If so, then need to check for activated flag. If set to false, then transfer to #patch. If not, proceed with normal creation

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "api/users/show"
    else
      errors = @user.errors.full_messages
      if errors.any? {|err| err.include?("already been taken")}
        status_code = 401 #UNAUTHORIZED
      else
        status_code = 422 #UNPROCESSABLE ENTITY
      end
      render json: @user.errors.full_messages, status: status_code
    end
  end

  def show
    @user = User.find(params[:id])
  end


  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :activated,
      friendships_attributes: [:id, :friend_id])
  end
end
