# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  activated       :boolean          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base

  validates :username, :email, :password_digest, :session_token, :activated, presence: true
  validates :email, :session_token, uniqueness: true;
  validates :password, length: {minimum: 6, allow_nil: true}

  has_many :bills, dependent: :destroy,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Bill

  has_many :paying_bills,
    primary_key: :id,
    foreign_key: :payer_id,
    class_name: :Bill

  has_many :splits

  has_many :bills_split,
    through: :splits,
    source: :bill

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

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.bcrypt_pwd.is_password?(password) ? user : nil
  end

  def bcrypt_pwd
    BCrypt::Password.new(self.password_digest)
  end

  def bills_involved_in
    # For BillsController#index, so we display the bills that a user is involved in (either splitting and/or authored)
    (self.bills_split + self.bills).uniq
  end

end
