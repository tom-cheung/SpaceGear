class CreateProductTypes < ActiveRecord::Migration[5.2]
  def change
    create_table :product_types do |t|
      t.string :type_name, null: false
      t.integer :category_id, null: false
      t.timestamps
    end

    add_index :product_types, :type_name, unique: true 
  end
end
