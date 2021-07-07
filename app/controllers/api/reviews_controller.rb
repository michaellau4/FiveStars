class Api::ReviewsController < ApplicationController
  def index
    @reviews = Review.all.where(business_id: params[:business_id])
    render :index
  end

  def show
    @review = Review.find_by(id: params[:id])
    render :show
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def update
    @review = Review.find_by(id: params[:id])
    if @review.update(review_params) && @review.author_id === current_user.id
      render :index
    else
      render json: ['Did not fill in all areas'], status: 422
    end
  end

  def delete
    @review = Review.find_by(id: params[:id])
    if @review && @review.author_id === current_user.id && review.destroy
    end
  end

  private
  def review_params
    params.require(:review).permit(:body, :rating, :author_id, :business_id)
  end
 
end
