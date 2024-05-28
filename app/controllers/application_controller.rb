class ApplicationController < ActionController::Base
    def styles
        send_file "#{Rails.root}/app/assets/stylesheets/styles.css", type: 'text/css', disposition: 'inline'
      end
end
