Rails.application.routes.draw do
  get 'contact/index'
  get 'transfer', to: 'transfer#index', as: :transfer
  get 'excursion', to: 'excursion#index', as: :excursion
  # get 'taxi-rates', to: 'taxi#index', as: :taxi
  get 'contact', to: 'contact#index', as: :contact
  root 'home#index'
end