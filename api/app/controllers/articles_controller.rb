class ArticlesController < ApplicationController

  def index
    puts "!!! PARAMS #{params}"
    @data = ::SearchService.call params
  end

  def create
    CreateArticleService params
  end

end
