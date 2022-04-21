class SessionsController < ApplicationController
  def index
    @sessions = Session.all
    render json: @sessions
  end

  def show
    @session = Session.find params[:id]
    render json: @session
  end

  def new
    @session = Session.new
    puts "Creating a new session"
    puts @session
  end

  def create
    puts 'Placing new session into the sessions table'
    puts session_params
    
    session = Session.new(session_params)
    session.save

  end

  def session_params
    params.require(:session).permit(:user_id, :game_id, :error_count, :timer, :created_at, :updated_at)
  end

end
