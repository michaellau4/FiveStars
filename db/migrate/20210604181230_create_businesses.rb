class CreateBusinesses < ActiveRecord::Migration[5.2]
  def change
    create_table :businesses do |t|
      t.string :business_name, null: false
      t.string :address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :zip, null: false
      t.string :phone_number
      t.string :website_url
      t.integer :owner_id, null: false
      t.timestamps
    end
    add_index :businesses, :owner_id
  end
end
