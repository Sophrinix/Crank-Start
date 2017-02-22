class Api::BackingsController < ApplicationController

  def create
    @backing = Backing.new(params[:backer_id])
  end
end
