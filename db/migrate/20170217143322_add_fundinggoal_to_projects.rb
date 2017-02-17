class AddFundinggoalToProjects < ActiveRecord::Migration[5.0]
  def change
    add_column :projects, :funding_goal, :string
  end
end
