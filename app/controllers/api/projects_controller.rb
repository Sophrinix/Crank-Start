class Api::ProjectsController < ApplicationController

  def create
    @project = Project.new(params)
    if @project.save!
      render "api/projects/show"
    else
      render json: @project.errors.full_messages, status: 422
    end
  end
end
