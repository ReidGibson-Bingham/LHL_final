Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :users, except: [:destroy]
   
  resources :texts, except: [:destroy]

  resources :games, except: [:destroy, :edit]
  
  # these routes are for showing users a login form, logging them in, and logging them out.
  # get '/login' => 'login#new'
  post '/login' => 'login#create'
  # get '/logout' => 'login#destroy'  

  get '*path', to: "static_pages#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

end
