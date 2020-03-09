module Endpoints
  module Articles
    module Group
      include EndpointFlux::Endpoint

      authorizator :skip

      validator :inline do
        required(:search_type).value(included_in?: ::SearchService::GROUP_SEARCH_TYPES)
        required(:field).value(:str?)
      end

      process do |request, response|

        response.body[:articles] = ::SearchService.call(request.params)

        [request, response]
      end

      decorator :add_status, 200
    end
  end
end
