class AddCreatedAtToRewards < ActiveRecord::Migration[5.0]
  def change
    add_column :rewards, :created_at, :datetime
  end
end
