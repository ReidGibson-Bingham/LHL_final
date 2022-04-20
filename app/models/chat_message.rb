class ChatMessage < ApplicationRecord
  belongs_to :user
  # belongs_to :room
    after_create_commit do 
      ChatMessageJob.perform_later(

        chat_msg: ActiveModel::Serializer::CollectionSerializer
        .new(ChatMessage.all, serializer: ChatMessageSerializer
        ).as_json
      )
    
    end
end
