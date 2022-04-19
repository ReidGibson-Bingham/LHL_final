class Game < ApplicationRecord
  belongs_to :user, :foreign_key => :player1_id
  belongs_to :user, :foreign_key => :player2_id
  belongs_to :text 

  has_many :sessions
end
