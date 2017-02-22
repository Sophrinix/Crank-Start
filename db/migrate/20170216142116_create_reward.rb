class CreateReward < ActiveRecord::Migration[5.0]
  def change
    create_table :rewards do |t|
      t.integer :project_id, null: false
      t.string :title, null: false
      t.string :body, null: false
    end
  end
end
