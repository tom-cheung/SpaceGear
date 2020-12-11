# == Schema Information
#
# Table name: products
#
#  id           :bigint           not null, primary key
#  product_name :string           not null
#  type_id      :integer          not null
#  color        :string
#  size         :string
#  price        :decimal(, )      not null
#  description  :text             not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Product < ApplicationRecord
    validates :product_name, :type_id, :price, :description, presence: true 

    belongs_to :type, 
        foreign_key: :type_id, 
        class_name: :ProductType
end