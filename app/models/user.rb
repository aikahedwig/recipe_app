class User < ApplicationRecord
  has_secure_password

  validates :email, presence: true, uniqueness: true
  validates :password, presence: true, length: { minimum: 6 }
  attribute :admin, :boolean, default: false
  enum role: [:normal_user, :admin]
  after_initialize :set_default_role, if: :new_record?

  def set_default_role
    self.role ||= :normal_user
  end

  validates :name, presence: true, unless: :admin?

  def admin?
    role == 'admin'
  end
end
