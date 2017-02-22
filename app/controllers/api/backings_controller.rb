class Api::BackingsController < ApplicationController

  def create
    byebug
    @backing = Backing.new(backing_params)
  end

  def backing_params
    params.require(:backing).permit(:userId, :rewardId)
  end
end
