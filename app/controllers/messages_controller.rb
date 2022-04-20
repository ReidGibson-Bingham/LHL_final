class MessagesController < ApplicationController
  def index
    messages = Message.all
    render json: messages
  end

  def create
    message = Message.new(messages_params)
    if message.save
      chat = message.chat
      broadcast chat
    end
    render json: message
  end

  private

  def messages_params
    params.require(:message).permit(:message_body, :user_id, )
  end

  def broadcast(chat)
    ChatChannel.broadcast_to(chat, {
      chat: chat,
      users: chat.users,
      messages: chat.messages,
    })
  end
end
