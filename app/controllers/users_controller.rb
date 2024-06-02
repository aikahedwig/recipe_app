class UsersController < ApplicationController
  before_action :authenticate_user!
  before_action :require_admin, only: [:index, :show]

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      redirect_to root_path, notice: 'User was successfully created.'
    else
      render :new
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def index
    @users = User.all
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :admin)
  end

  def require_admin
    unless current_user.admin?
      flash[:alert] = "You are not authorized to perform this action."
      redirect_to root_path
    end
  end
end
