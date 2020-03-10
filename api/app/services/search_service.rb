class SearchService

  SEARCH_TYPES = [
      'index',
      'sort',
      'like',
      'group',
      'group_with_totals'
  ].freeze

  INDEX_SEARCH_TYPES = SEARCH_TYPES[0..2]
  GROUP_SEARCH_TYPES = SEARCH_TYPES[3]
  GROUP_WITH_TOTALS_SEARCH_TYPES = SEARCH_TYPES[4]

  def self.call params
    send(params[:search_type].to_sym, params)
  end

  def self.index params
    Article.joins(:story).all
  end

  def self.sort params
    Article.joins(:story).order("#{params[:field]} #{params[:order]}")
  end

  def self.group params
    Article.joins(:story).group_by {|field| field[params[:field]]}
  end

  def self.group_with_totals params
    ActiveRecord::Base.connection.exec_query("
      SELECT
       stories.name as story_name,
       COUNT(articles.name) as article_count,
       COUNT(DISTINCT articles.article_type) as article_type_count,
       articles.name as last_article_name,
       articles.id as article_id
      FROM stories
      INNER JOIN articles on articles.story_id = stories.id
      GROUP BY stories.name
     ").to_a.map do |field|
      OpenStruct.new(field)
    end
  end

  def self.like params
    Article
        .where("name LIKE :search or description LIKE :search", search: "%#{params[:field]}%")
  end
end
