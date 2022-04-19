class User < ApplicationRecord
  has_many :games, :foreign_key => :player1_id
  has_many :games, :foreign_key => :player2_id

  has_one :session
  
  validates :email, uniqueness: { case_sensitive: false }, presence: true
  validates :name, presence: true
  validates :password, presence: true


  

end
