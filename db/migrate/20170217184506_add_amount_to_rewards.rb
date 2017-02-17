class AddAmountToRewards < ActiveRecord::Migration[5.0]
  def change
    add_column :rewards, :amount, :integer
  end
end
