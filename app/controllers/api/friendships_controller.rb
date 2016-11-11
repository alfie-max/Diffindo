class Api::FriendshipsController < ApplicationController

  def index
    @friendships = current_user.friends
  end

end
