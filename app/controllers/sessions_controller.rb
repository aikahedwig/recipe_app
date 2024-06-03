class SessionsController < ApplicationController
  before_action :authenticate_user!, only: [:destroy]
  
  def new
  end

  def create
    # Deviseが自動的に認証処理を行う
  end

  def destroy
    sign_out current_user
    redirect_to root_path
  end
end