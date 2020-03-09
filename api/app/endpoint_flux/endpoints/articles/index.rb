module Endpoints
  module Articles
    module Index
      include EndpointFlux::Endpoint

      authorizator :skip

      validator :inline do
        required(:search_type).value(included_in?: ::SearchService::INDEX_SEARCH_TYPES)
        optional(:field).value(:str?)
        optional(:order).value(:str?)
      end

      process do |request, response|

        response.body[:articles] = ::SearchService.call(request.params)

        [request, response]
      end

      decorator :add_status, 200
      decorator :paginate, wrapped_in: :articles
      decorator :representable, decorator: 'Articles::Base',
                collection?: true,
                wrapped_in: :articles
    end
  end
end
