class GamesController < ApplicationController

  def index
    @games = Game.all
    render json: @games
  end

  def show
    @games = Game.find params[:id]
    render json: @games
  end

  def new
    @game = Game.new
    puts "Creating a new game"
    puts @game
  end

  def create
    puts 'Placing new game into the games table'
    puts game_params
    
    game = Game.new(game_params)
    game.save
    render json: game
  end

  def game_params
    params.require(:game).permit(:is_single_player, :player1_id, :player2_id, :game_datetime, :text_id, :created_at, :updated_at)
  end


end
