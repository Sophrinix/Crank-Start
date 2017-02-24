class Reward < ApplicationRecord

  validates :title, :body, :project_id, presence: true 

  belongs_to :project
  has_many :backings
  has_many :backers, through: :backings
end
