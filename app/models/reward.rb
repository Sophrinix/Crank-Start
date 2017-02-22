class Reward < ApplicationRecord

  validates :name, :description, :project_id, null: false

  belongs_to :project
  has_many :backers
  has_many :backers, through: :backings
end
