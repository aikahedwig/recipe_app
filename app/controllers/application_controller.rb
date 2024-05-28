# class ApplicationController < ActionController::Base
#     def styles
#         send_file "#{Rails.root}/app/assets/stylesheets/styles.css", type: 'text/css', disposition: 'inline'
#     end
#     def require_admin
#       unless current_user&.admin?
#         redirect_to root_path, alert: 'アドミン権限がありません'
#     end
#   end
# end
class ApplicationController < ActionController::Base
  # Deviseなどの認証ソリューションを使用する場合は、
  # その設定を行うコードを記述する

  # ログインユーザーの取得メソッド
  def current_user
    @current_user ||= User.find_by(id: session[:user_id]) if session[:user_id]
  end
  helper_method :current_user

  # ユーザーがログインしているかどうかを判別するメソッド
  def logged_in?
    !!current_user
  end
  helper_method :logged_in?

  # アクションの前に実行する処理を定義する(例: 認証チェック)
  before_action :authenticate_user!

  # アドミン権限のチェックメソッド
  def require_admin
    unless current_user&.admin?
      redirect_to root_path, alert: 'アドミン権限がありません'
    end
  end

  # その他、アプリケーション全体で使用する補助メソッドを定義する

  private

  # 認証関連の処理を記述する(例: devise_parameter_sanitizer)

end
    
    
      
