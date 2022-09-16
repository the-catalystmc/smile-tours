Rails.application.routes.draw do
  get 'transfer', to: 'transfer#index', as: :transfer
  get 'excursion', to: 'excursion#index', as: :excursion
  root 'home#index'

end
