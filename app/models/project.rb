class Project < ApplicationRecord
  include PgSearch

  validates :title, :about, :funding_goal, :duration, :author_id, :category_id, presence: true

  has_attached_file :image, default_url: "https://ksr-ugc.imgix.net/missing_user_avatar.png?w=40&h=40&fit=crop&v=&auto=format&q=92&s=8c0db61c92692000c2678b375fc31714"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/


  belongs_to :user,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: "User"

  belongs_to :category,
    primary_key: :id,
    foreign_key: :category_id,
    class_name: "Category"

  has_many :rewards,
  primary_key: :id,
  foreign_key: :project_id,
  class_name: "Reward"


  has_many :backings, through: :rewards, source: :backings
  has_many :backers, through: :rewards, source: :backers

  pg_search_scope :search_by_title, :against => [:title]

  pg_search_scope :category_search, :associated_against => {category: :name}

  def self.search(params)
    self.search_by_title(params)
  end

end
