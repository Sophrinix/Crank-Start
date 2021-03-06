
class Api::ProjectsController < ApplicationController

  def new
    @project = Project.new
  end

  def create
    @project = Project.new(project_params)
    if @project.save
      render "api/projects/show"
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def update
    @project = Project.find(project_params[:id])
    if @project.update_attributes(project_params)
      render "api/projects/show"
    else
      render json: { errors: @project.errors}
    end
  end

  def edit
    @project = Project.find(params[:id])
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
    :image,
    :author_id,
    :category_id,
    :duration,
    :funding,
    :created_at,
    :completed,
    :funding_goal,
    :image,
    :city,
    :state,
    :complete,
    )
  end
end
