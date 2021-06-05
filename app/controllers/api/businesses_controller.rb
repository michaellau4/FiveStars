class Api::BusinessesController < ApplicationController

  def show
    @business = Business.find_by(id: params[:id])
    render "api/businesses/show"
  end


  private
  def business_params
    params.require(:business)
      .permit(
        :business_name,
        :address,
        :city,
        :state,
        :zip,
        :phone_number,
        :website_url)
  end
end
