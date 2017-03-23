class Backing < ApplicationRecord

  validates :reward_id, :backer_id, presence: true

  belongs_to :reward

  belongs_to :backer,
  class_name: "User"


end
