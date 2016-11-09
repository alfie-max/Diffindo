class Friend < ActiveRecord::Base

  validates :user_id, :friend_id, presence: true

  #Each user can only be entered once as a split payer for each bill:
  validates_uniqueness_of :user_id, scope: [:friend_id]



  # belongs_to :user
  #
  # belongs_to :friend,
  #   primary_key: :id,
  #   foreign_key: :user_id,
  #   class_name: :User

end
