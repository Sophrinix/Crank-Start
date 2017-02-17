class DropRewardsTable < ActiveRecord::Migration[5.0]
  def change
    drop_table :rewards
  end
end
