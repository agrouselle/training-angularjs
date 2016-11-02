module Api
  class CategoriesController < ApplicationController
    def index
      @categories = Category.all.distinct

      render json: @categories
    end
  end
end
