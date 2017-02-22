class Api::CategoriesController < ApplicationController
  def index
    @categories = Category.all
    if @categories
      render :index;
    else
      render json: ['Failed to retrieve categories'], status: 404
    end
  end

end
