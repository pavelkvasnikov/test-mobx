Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :articles, only: %i[index create] do
    get 'group', on: :collection
    get 'group_with_totals', on: :collection
  end
end
