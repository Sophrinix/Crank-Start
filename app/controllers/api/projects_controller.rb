
class Api::ProjectsController < ApplicationController

  def new
    @project = Project.new
  end

  def create
    @project = Project.new(project_params)
    if @project.save!
      render "api/projects/show"
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def index
    @projects = Project.all
  end

  def show
    @project = Project.find(params[:id])
  end

  private
  def project_params
    params.require(:project).permit(
    :id,
    :title,
    :blurb,
    :about,
    :author_id,
    :duration,
    :funding,
    :created_at,
    :completed,
    :funding_goal,
    :img_url
    )
  end
end