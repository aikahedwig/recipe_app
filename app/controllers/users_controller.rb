class UsersController < ApplicationController
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
    
    def show
      @user = current_user # 現在ログインしているユーザーを取得
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end
end
