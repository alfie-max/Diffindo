class Api::FriendshipsController < ApplicationController

  before_action :validate_different_users, only: [:create]

  def validate_different_users
    if friendship_params[:user_id] == friendship_params[:friend_id]
      render json: ["Can't be friend with yourself."], status: 422
    end
  end

  def create
    @friendship = Friendship.new(friendship_params)
    if @friendship.save
      

  end

  def index
    @friendships = User.all
  end


  private

  def friendship_params
    params.require(:friendship).permit(:user_id, :friend_id)
  end


end
