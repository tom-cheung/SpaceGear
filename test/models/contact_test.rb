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
require 'test_helper'

class ContactTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
