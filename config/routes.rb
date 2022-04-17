Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :users, except: [:destroy]
   
  resources :texts, except: [:destroy]

  resources :games, except: [:destroy, :edit]
  # post '/users' => 'users#create'
  #get '/signup' => 'users#new'

  get '*path', to: "static_pages#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

end
