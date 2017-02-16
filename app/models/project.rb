class Project < ApplicationRecord
  validates :title, :img_url, :description, :funding_goal, :duration, :creator_id, presence: true

  belongs_to :user, optional: true

end
