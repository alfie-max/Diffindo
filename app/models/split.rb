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

  validates :bill_id, :user_id, presence: true

  #Each user can only be entered once as a split payer for each bill:
  validates_uniqueness_of :bill_id, scope: [:user_id]

  belongs_to :bill
  belongs_to :user

end
