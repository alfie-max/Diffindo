class Friendship < ActiveRecord::Base

  # The presence of user has to be validates instead of user_id so the inverse_of / accepts_nested_attributes_for can work properly. If not, it will raise an error saying "Friendships user_id can't be blank"
  validates :user, :friend_id, presence: true

  #Each user can only be entered once as a friend
  validates_uniqueness_of :user_id, scope: [:friend_id]

  belongs_to :user, inverse_of: :friendships

  belongs_to :friend,
    primary_key: :id,
    foreign_key: :friend_id,
    class_name: :User


  after_create :create_inverse, unless: :has_inverse?
  after_destroy :destroy_inverses, if: :has_inverse?


  def create_inverse
    self.class.create(inverse_friendship_options)
  end

  def destroy_inverses
    inverses.destroy_all
  end

  def has_inverse?
    self.class.exists?(inverse_friendship_options)
  end

  def inverses
    self.class.where(inverse_friendship_options)
  end

  def inverse_friendship_options
    { friend_id: user_id, user_id: friend_id }
  end

end
