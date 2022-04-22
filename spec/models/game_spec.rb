require 'rails_helper'

RSpec.describe Game, type: :model do
  
  before(:each) do
    @Ggame = Game.new(game: {}, is_single_player: nil, player1_id: 1, player2_id: nil, game_datetime: nil, text_id: 1, created_at: nil, updated_at: nil)
  end
  
  describe 'Validations' do
    it "has a player id that is not nil" do
      expect(@product.name).not_to be(nil)
    end
    it "has a price that is truthy" do
      expect(@product.price).to be_truthy
    end
    it "has a quantity that exists" do
      expect(@product.quantity).to be_truthy
    end
    it "has a category" do
      expect(@product.category).not_to be(nil)
    end
  end
end