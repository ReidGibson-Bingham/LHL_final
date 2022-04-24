class User < ApplicationRecord
  has_many :games
  
  validates :email, uniqueness: { case_sensitive: false }, presence: true
  validates :name, presence: true
  validates :password, presence: true

end
