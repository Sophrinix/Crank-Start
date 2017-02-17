class AddDescriptionToRewards < ActiveRecord::Migration[5.0]
  def change
    add_column :rewards, :description, :string
  end
end
