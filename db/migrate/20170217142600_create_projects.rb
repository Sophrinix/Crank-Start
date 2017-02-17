class CreateProjects < ActiveRecord::Migration[5.0]
    def change
      create_table :projects do |t|
        t.string :title, null: false
        t.string :blurb, null: false
        t.text :about, null: false
        t.datetime :created_at, null: false
        t.integer :duration, null: false
        t.integer :author_id, null: false
        t.string :img_url
        t.string :city, null: false
        t.string :state, null: false
      end
  end
end
