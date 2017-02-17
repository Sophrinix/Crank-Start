class AddProjectIdToRewards < ActiveRecord::Migration[5.0]
  def change
    add_column :rewards, :project_id, :integer
  end
end
