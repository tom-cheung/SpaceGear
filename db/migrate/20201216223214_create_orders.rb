class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.integer :purchaser_id
      t.integer :address_id
      t.integer :payment_id
      t.decimal :total 
      t.timestamps
    end
  end
end
