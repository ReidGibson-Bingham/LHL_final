class Text < ApplicationRecord
  has_many :games
  validates :difficulty, presence: true
  validates :content, presence: true
end
