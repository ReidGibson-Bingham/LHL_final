class ChatController < ActionController::API

  def chat
    ActionCable.server.broadcast(
      "chat_#{room}",
      {
        sent_by: 'Paul',
        body: 'This is a cool chat app.'
      }
    )
  end

end