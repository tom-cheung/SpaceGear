class AddColumnToProductsTable < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :img_name, :string, null: false 
  end
end
