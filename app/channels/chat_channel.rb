class ChatChannel < ApplicationCable::Channel
  def subscribed
    stop_all_streams
    chat = Chat.find(params[:room])
    stream_for chat
  end

  def received(data)
    ChatChannel.broadcast_to(chat, { chat: chat, users: chat.users, messages: chat.messages })
  end

  def unsubscribed
    stop_all_streams
  end
end