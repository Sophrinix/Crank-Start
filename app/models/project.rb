class Project < ApplicationRecord
  validates :title, :img_url, :about, :funding_goal, :duration, :author_id, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: "User"

  has_many :rewards,
  primary_key: :id,
  foreign_key: :project_id,
  class_name: "Reward"

end
