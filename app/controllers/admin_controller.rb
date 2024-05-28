class AdminController < ApplicationController
    before_action :require_admin

  def index
    # 管理画面のダッシュボードなどを表示する処理
    @recipes = Recipe.all
  end

  def show
    # 特定のレシピの詳細を表示する処理
    @recipe = Recipe.find(params[:id])
  end

  def new
    # 新しいレシピを作成するための画面を表示する処理
    @recipe = Recipe.new
  end

  def create
    # 新しいレシピを作成する処理
    @recipe = Recipe.new(recipe_params)
    if @recipe.save
      redirect_to admin_recipe_path(@recipe), notice: 'レシピを作成しました'
    else
      render :new
    end
  end

  private

  def recipe_params
    params.require(:recipe).permit(:name, :instructions, :cook_time)
  end
end
