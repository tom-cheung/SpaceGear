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
class Order < ApplicationRecord
    
    has_many :ordered_products, dependent: :destroy
   
    has_many :products, 
        through: :ordered_products,
        source: :product

    belongs_to :orderer, 
        foreign_key: :purchaser_id, 
        class_name: :User

    belongs_to :address, 
        foreign_key: :address_id, 
        class_name: :Contact 

    accepts_nested_attributes_for :ordered_products
end
