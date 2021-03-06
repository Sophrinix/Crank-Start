class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :password, length: {minimum: 6, allow_nil: true }

  attr_reader :password
  after_initialize :ensure_session_token

  ###add associations after making models
  has_many :projects,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: "Project"

  has_many :backings,
  primary_key: :id,
  foreign_key: :backer_id,
  class_name: "Backing"

  has_many :rewards, through: :backings
  has_many :comments
  has_many :contributions


	def self.find_by_credentials username, password
		user = User.find_by(username: username)
		return nil unless user
		user.valid_password?(password) ? user : nil
	end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    return self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
