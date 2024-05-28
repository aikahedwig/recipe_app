class CommunityPostsController < ApplicationController
    def index
      @community_posts = CommunityPost.all
    end
  
    def show; end
  
    def new
      @community_post = CommunityPost.new
    end
  
    def create
      @community_post = CommunityPost.new(community_post_params)
      @community_post.user = current_user
  
      if @community_post.save
        redirect_to @community_post, notice: 'Post was successfully created.'
      else
        render :new
      end
    end
  
    private
  
    def community_post_params
      params.require(:community_post).permit(:title, :content)
    end
  end