# == Schema Information
#
# Table name: bills
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  amount      :float            not null
#  category_id :integer          not null
#  author_id   :integer          not null
#  payer_id    :integer          not null
#  date        :date             not null
#  doc_url     :string
#  split_type  :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class BillTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
