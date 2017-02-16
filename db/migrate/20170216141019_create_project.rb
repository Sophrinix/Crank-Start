class CreateProject < ActiveRecord::Migration[5.0]
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.string :img_url, null: false
      t.text :description, null: false
      t.string :funding_goal, null: false
      t.string :duration, null: false
      t.integer :creator_id, null: false
    end
  end
end
