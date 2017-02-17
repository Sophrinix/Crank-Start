class Project < ApplicationRecord
  validates :title, :img_url, :about, :funding_goal, :duration, :author_id, presence: true

  belongs_to :user, optional: true

end
