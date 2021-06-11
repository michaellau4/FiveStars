class CreateBusinessTags < ActiveRecord::Migration[5.2]
  def change
    create_table :business_tags do |t|
      t.integer :business_id, null: false
      t.integer :tag_id, null: false
      t.timestamps
    end
    add_index :business_tags, :business_id
    add_index :business_tags, :tag_id 
  end
end
