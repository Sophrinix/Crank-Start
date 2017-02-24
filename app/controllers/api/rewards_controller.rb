class Api::RewardsController < ApplicationController

  def create
    @reward = Reward.new(reward_params)
    if @reward.save!
      byebug
      @project = @reward.project
    else
      render json: { errors: @reward.errors}
    end
  end

  def index
    Reward.where(project_id: params[:project_id])
  end

  def show
    @reward = Reward.find(params.permit(:id)[:id])
    @project = @reward.project
  end

  private

  def reward_params
    params.require(:reward).permit(:amount, :title, :body, :project_id, :backers)
  end

end
