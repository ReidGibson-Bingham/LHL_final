class GamesController < ApplicationController
  def index
    @games = Game.all
    render json: @games
  end
  def show
    @games = Game.find params[:id]
    render json: @games
  end
end
