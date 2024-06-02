class RecipesController < ApplicationController
    before_action :require_admin, only: [:new, :create, :destroy]
    before_action :set_recipe, only: %i[show edit update destroy]

    def index
      @recipes = Recipe.all
    end
  
    def show; end
  
    def new
      @recipe = Recipe.new
    end
  
    def create
      @recipe = Recipe.new(recipe_params)
      @recipe.user = current_user
  
      if @recipe.save
        redirect_to @recipe, notice: 'Recipe was successfully created.'
      else
        render :new
      end
    end
  
    def edit; end
  
    def update
      if @recipe.update(recipe_params)
        redirect_to @recipe, notice: 'Recipe was successfully updated.'
      else
        render :edit
      end
    end
  
    def destroy
      @recipe.destroy
      redirect_to recipes_url, notice: 'Recipe was successfully destroyed.'
    end

    def destroy
      @recipe = Recipe.find(params[:id])
      if current_user.admin?
        @recipe.destroy
        flash[:notice] = "Recipe deleted successfully."
      else
        flash[:alert] = "You are not authorized to perform this action."
      end
      redirect_to user_path(current_user)
    end
  
    private
  
    def set_recipe
      @recipe = Recipe.find(params[:id])
    end
  
    def recipe_params
      params.require(:recipe).permit(:name, :ingredients, :instructions, :nutritional_info)
    end
    def require_admin
      unless current_user&.admin?
        redirect_to root_path, alert: 'アドミン権限がありません'
      end
    end
    
end
