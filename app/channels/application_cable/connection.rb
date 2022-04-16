# app/channels/application_cable/connection.rb

# forms the foundation of the client server relationship
# from it's name it builds the connection

module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :current_user

    def connect
      self.current_user
    end

    # private
    #   def find_verified_user
    #     if verified_user = User.find_by(id: cookies.encrypted[:user_id])
    #       verified_user
    #     else
    #       reject_unauthorized_connection
    #     end
    #   end

  end
end