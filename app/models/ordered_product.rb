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
class OrderedProduct < ApplicationRecord
    
    belongs_to :order
    belongs_to :product

end
