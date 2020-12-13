class Changeproducttypetable < ActiveRecord::Migration[5.2]
  def change
    remove_column :product_types, :category_id, :integer
  end
end
