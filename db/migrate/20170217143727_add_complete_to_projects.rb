class AddCompleteToProjects < ActiveRecord::Migration[5.0]
  def change
    add_column :projects, :complete, :boolean
  end
end
