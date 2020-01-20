class CreateArticleService
  def self.call params
    Article.create!(params[:article])
    NotificationService.call({event_type: 'data_updated', route: 'index'})
  end
end
