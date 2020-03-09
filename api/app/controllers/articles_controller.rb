class ArticlesController < ApplicationController

  def index
    present 'articles/index'
  end

  def group
    present 'articles/group'
  end

  def group_with_totals
    present 'articles/group_with_totals'
  end

  def create
    CreateArticleService params
  end

end
