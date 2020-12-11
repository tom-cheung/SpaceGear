# == Schema Information
#
# Table name: product_types
#
#  id          :bigint           not null, primary key
#  type_name   :string           not null
#  category_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
require 'test_helper'

class ProductTypeTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
