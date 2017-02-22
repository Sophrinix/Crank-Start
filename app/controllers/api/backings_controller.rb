class Api::BackingsController < ApplicationController

  def create
    @backing = Backing.new(backing_params)
  end

  def backing_params
    params.require(:backing).permit(:reward_id, :backer_id)
  end
end
