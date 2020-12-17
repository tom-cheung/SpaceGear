# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  first_name      :string
#  last_name       :string
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :email, presence: true, uniqueness: true 
    validates :password_digest, presence: true 
    validates :session_token, presence: true, uniqueness: true 
    validates :password, length: {minimum: 6}, allow_nil: true 

    # SPIRE 

    attr_reader :password
    before_validation :ensure_session_token

    has_many :orders,
        foreign_key: :purchaser_id,
        class_name: :Order

    def self.find_by_credentials(email, password)
        @user = User.find_by(email: email)

        if @user && @user.is_password?(password)
            return @user 
        else
            return nil 
        end
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end

    def ensure_session_token 
        self.session_token ||= SecureRandom.urlsafe_base64
    end

end
