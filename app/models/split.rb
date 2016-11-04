# == Schema Information
#
# Table name: splits
#
#  id         :integer          not null, primary key
#  bill_id    :integer          not null
#  user_id    :integer          not null
#  amount     :float            not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Split < ActiveRecord::Base

  # The presence of bill has to be validates instead of bill_id so the inverse_of / accepts_nested_attributes_for can work properly. If not, it will raise an error saying "Split bills can't be blank"
  validates :bill, :user_id, presence: true

  #Each user can only be entered once as a split payer for each bill:
  validates_uniqueness_of :bill_id, scope: [:user_id]

  belongs_to :bill, inverse_of: :splits
  belongs_to :user

end
