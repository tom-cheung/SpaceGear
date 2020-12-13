# == Schema Information
#
# Table name: product_types
#
#  id         :bigint           not null, primary key
#  type_name  :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class ProductType < ApplicationRecord
    validates :type_name, presence: true 

    has_many :products,
        foreign_key: :type_id, 
        class_name: :Product

    has_many :categories, -> { distinct }, through: :products 
end
