class Reward < ApplicationRecord

  validates :name, :description, :project_id, null: false

  belongs_to :project
  has_many :backings
  has_many :backers, through: :backings
end
