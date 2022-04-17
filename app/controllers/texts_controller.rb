class TextsController < ApplicationController

  def index
    @texts = Text.all 
    render json: @texts
  end

  def show 
    @text = Text.find params[:id]
    render json: @text
  end

  def create

    @text = Text.new(text_params)
    ActionCable.server.broadcast 'texts',
      content: @text.content,
    head :ok

  end

end
