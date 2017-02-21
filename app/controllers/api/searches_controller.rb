class Api::SearchesController < ApplicationController

  def index
    @projects = Project.search(params[:query])
    if @projects
      render 'api/projects/index'
    end
  end

  def category_search
    @projects = Project.category_search(params[:category])
    if @projects
      render 'api/projects/index'
    end
  end

end
