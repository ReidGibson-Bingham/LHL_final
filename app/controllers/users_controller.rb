
class UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end

  def show
    @user = User.find params[:id]
    render json: @user
  end

  def new
    @user = User.new
    puts "this is user new"
    puts @user
  end

  

  def create
    puts 'this is from users controller'
    puts user_params
    
    user = User.new(user_params)
    user.save

  end
  

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end

end

