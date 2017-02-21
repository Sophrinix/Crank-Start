class Project < ApplicationRecord
  include PgSearch

  validates :title, :img_url, :about, :funding_goal, :duration, :author_id, :category_id, presence: true


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

   pg_search_scope :search_by_title, :against => [:title]

   pg_search_scope :category_search, :associated_against => {category: :name}

  def self.search(params)
    self.search_by_title(params)
  end

end
