class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :product_name, null: false 
      t.integer :type_id, null: false 
      t.string :color, null: true 
      t.string :size, null: true 
      t.decimal :price, null: false 
      t.text :description, null: false 
      t.timestamps
    end

    add_index :products, :price
    add_index :products, :type_id
    add_index :products, :product_name
  end
end
