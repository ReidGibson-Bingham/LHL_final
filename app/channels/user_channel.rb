class UserChannel < ApplicationCable::Channel
  # Called when the consumer has successfully
  # become a subscriber to this channel.
  def subscribed
    stream_from "user_#{params[:room]}"
  end

  def receive(data)
    ActionCable.server.broadcast("user_#{params[:room]}", data)
  end

end