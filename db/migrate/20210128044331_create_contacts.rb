class CreateContacts < ActiveRecord::Migration[5.2]
  def change
    create_table :contacts do |t|
      t.string :first_name, null: false 
      t.string :last_name, null: false 
      t.string :address_one, null: false
      t.string :address_two, null: false 
      t.string :city, null: false
      t.string :country, null: false
      t.string :state, null: false
      t.integer :zipcode, null: false 
      t.string :phone, null: false
      t.integer :user_id
      t.timestamps
    end

    add_index :contacts, :user_id
  end
end
