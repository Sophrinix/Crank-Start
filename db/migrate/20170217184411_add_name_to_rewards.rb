class AddNameToRewards < ActiveRecord::Migration[5.0]
  def change
    add_column :rewards, :name, :string
  end
end
