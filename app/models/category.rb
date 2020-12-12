# == Schema Information
#
# Table name: categories
#
#  id            :bigint           not null, primary key
#  category_name :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Category < ApplicationRecord
    validates :category_name, presence: true 
    
    has_many :types,
        foreign_key: :category_id, 
        class_name: :ProductType

    has_many :products, 
        through: :types, 
        source: :products
end
