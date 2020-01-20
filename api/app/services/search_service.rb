class SearchService
  def self.call params
    case params[:search_type]
    when 'sort'
      sort params
    when 'group'
      group params
    when 'group_with_totals'
      group_with_totals
    when 'like'
      like params
    else
      Article.all
    end
  end

  def self.sort params
    Article.order(params[:field] => params[:order].to_sym)
  end

  def self.group params
    Article.group(params[:field])
  end

  def self.group_with_totals
    ActiveRecord::Base.connection.execute("
      select count(articles.id) as article_count,
       (
           select sum(article_type_count)
            from
              (select count(articles.article_type) as article_type_count from articles group by articles.article_type)

               ),
       stories.name as story_name,
       stories.id as story_id,
       (select name from articles where articles.story_id = story_id order by articles.created_at limit 1) as last_article

from articles
inner join stories on articles.story_id = stories.id
group by stories.name;
")
  end

  def self.like params
    Article
        .where("name LIKE :search or description LIKE :search", search: "%#{params[:field]}%")
  end
end
