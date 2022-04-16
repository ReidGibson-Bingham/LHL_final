Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  mount ActionCable.server => '/cable'

  resources :users, except: [:destroy]
   
  resources :texts, except: [:destroy]

  get '*path', to: "static_pages#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

end

