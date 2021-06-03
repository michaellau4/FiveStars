class Editusercolumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :username
    add_column :users, :zipcode, :string, null: false
    add_column :users, :birthday, :datetime
  end
end
