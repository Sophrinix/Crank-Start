class Reward < ApplicationRecord

  validates :name, :description, :project_id, null: false

  belongs_to :project
end
