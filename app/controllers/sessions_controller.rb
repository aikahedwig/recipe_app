class SessionsController < ApplicationController
    def new
    end
  
    def create
      user = User.find_by(email: params[:email])
      if user && user.authenticate(params[:password])
        # ログイン成功の処理
        session[:user_id] = user.id
        redirect_to root_path, notice: 'ログインしました'
      else
        # ログイン失敗の処理
        flash.now[:alert] = 'メールアドレスまたはパスワードが間違っています'
        render :new
      end
    end
  end
  