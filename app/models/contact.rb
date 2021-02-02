# == Schema Information
#
# Table name: contacts
#
#  id          :bigint           not null, primary key
#  first_name  :string           not null
#  last_name   :string           not null
#  address_one :string           not null
#  address_two :string           not null
#  city        :string           not null
#  country     :string           not null
#  state       :string           not null
#  zipcode     :integer          not null
#  phone       :string           not null
#  user_id     :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Contact < ApplicationRecord
    validates :first_name, :last_name, :address_one, :city, :country, :state, :zipcode, :phone, :user_id, presence: true

    belongs_to :user, 
        foreign_key: :user_id, 
        class_name: :User

    has_many :orders, 
        foreign_key: :address_id,
        class_name: :Order
end
