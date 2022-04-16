class User < ApplicationRecord
  has_many :games, :foreign_key => :player1_id
  has_many :games, :foreign_key => :player2_id
  validates :email, uniqueness: { case_sensitive: false }, presence: true
  validates :name, presence: true
  
end
