# == Schema Information
#
# Table name: ordered_products
#
#  id         :bigint           not null, primary key
#  order_id   :integer          not null
#  product_id :integer          not null
#  quantity   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'test_helper'

class OrderedProductTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
