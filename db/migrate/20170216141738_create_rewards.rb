class CreateRewards < ActiveRecord::Migration[5.0]
  def down
    drop_table :rewards
  end
end
