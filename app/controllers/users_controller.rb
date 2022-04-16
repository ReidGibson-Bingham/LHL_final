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
  end

  def create
    @user = User.new(user_params) 
  end
  

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end

end
