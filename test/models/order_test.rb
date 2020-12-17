# == Schema Information
#
# Table name: orders
#
#  id           :bigint           not null, primary key
#  purchaser_id :integer
#  address_id   :integer
#  payment_id   :integer
#  total        :decimal(, )
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
require 'test_helper'

class OrderTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
