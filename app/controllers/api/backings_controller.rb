class Api::BackingsController < ApplicationController

  def create
    @backing = Backing.new(backing_params)
    if @backing.save!
      @project = @backing.reward.project
      @project.funding += @backing.reward.amount
      @project.save!
      render 'api/backings/show'
    else
      render json: @backing.errors.full_messages, status: 422
    end
  end

  def backing_params
    params.require(:backing).permit(:reward_id, :backer_id)
  end
end
