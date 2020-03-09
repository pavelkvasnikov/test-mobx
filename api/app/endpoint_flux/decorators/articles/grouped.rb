module Decorators
  module Articles
    class Base < Representable::Decorator
      include Representable::JSON

      property :id
      property :name
      property :description
      property :article_type
      property :story_name, exec_context: :decorator

      property :updated_at
      property :created_at

      def story_name
        represented.story.name
      end
    end
  end
end
