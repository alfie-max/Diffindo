class User < ActiveRecord::Base

  validates :username, :email, :password_digest, :session_token, :activated, presence: true
  validates :username, :email, :session_token, uniqueness: true;
  validates :password, length: {minimum: 6, allow_nil: true}

  after_initialize :ensure_session_token

  attr_reader :password

  def generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def ensure_session_token
    self.session_token ||= self.generate_session_token
  end

  def reset_session_token
    self.session_token = self.generate_session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def self.find_by_username
    #Use this to look for a friend who has been added by another user. If found, check for activated flag and proceed accordingly
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.bcrypt_pwd.is_password?(password) ? user : nil
  end

  def bcrypt_pwd
    BCrypt::Password.new(self.password_digest)
  end
end
