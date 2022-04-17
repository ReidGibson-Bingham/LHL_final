# where the server side handling of the subscriptions happen

class ConsumerChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'texts'
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
