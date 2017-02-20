class Api::SearchesController < ApplicationController

  def index
    @projects = Project.search(params[:query])
    if @projects
      render 'api/projects/index'
    end
  end

end
