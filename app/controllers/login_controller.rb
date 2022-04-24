class LoginController < ApplicationController
  def new
  end

  def create
    if user = User.connection.execute("Select * from users where email = '" + params[:email] + "'")
      puts "params[:email]:" + params[:email]
      render json: user[0]
    else
      # failure, render login form
      redirect_to '/login'
    end
  end

  def destroy
  end
 
end