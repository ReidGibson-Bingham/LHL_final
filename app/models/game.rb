class Game < ApplicationRecord
  belongs_to :users
  belongs_to :texts
  validates :error_count, presence: true
  validates :total_time, presence: true
end
