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
    
    has_many :products, 
        foreign_key: :category_id,
        class_name: :Product

    # has_many :types,
    #     through: :products, 
    #     source: :type
    #  issue with this is it returns duplicate values because it returns a type for every product. 

    # rails magic
    has_many :types, -> { distinct }, through: :products 

end
