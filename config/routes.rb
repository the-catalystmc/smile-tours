Rails.application.routes.draw do
  get 'transfer', to: 'transfer#index', as: :transfer
  get 'excursion', to: 'excursion#index', as: :excursion
  get 'taxi-rates', to: 'taxi#index', as: :taxi
  root 'home#index'
end