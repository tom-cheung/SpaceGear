class ChangeColumn < ActiveRecord::Migration[5.2]
  def change
    change_column :contacts, :address_two, :string, :null => true
  end
end
