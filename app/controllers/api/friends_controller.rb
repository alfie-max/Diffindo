class Api::FriendsController < ApplicationController

  def create
    @user = current_user

    friend = self.get_user_from_friend_params

    if friend_exists_as_user?(friend)
      new_friendship =
        Friendship.new(user_id: current_user.id, friend_id: friend.id)
      if new_friendship.save
        render "/api/users/show"
      else
        render json: ["You are already friends with #{friend.username}"], status: 422
      end

    else
      new_user = User.new(friend_params)
      new_user.activated = false
      new_user.password = "password"
      new_user.friendships_attributes = [{friend_id: current_user.id}]

      if new_user.save
        render 'api/users/show'
      else
        render json: new_user.errors.full_messages, status: 422
      end

    end

  end

  def get_user_from_friend_params
    User.find_by(email: friend_params[:email])
  end

  def friend_exists_as_user?(friend)
    friend ? true : false
  end

  private

  def friend_params
    params.require(:friend).permit(:username, :email)
  end



end
