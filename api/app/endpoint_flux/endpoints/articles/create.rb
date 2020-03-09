module Endpoints
  module Events
    module Update
      include EndpointFlux::Endpoint

      validator :inline, &Validations::Concern::Events::Update.schema

      process do |request, response|
        service = Services::Workflow::Base.new(request.params[:complaint],
                                               request.params[:current_user])

        service.call(event_name: request.params[:event_name])

        [request, response]
      end

      decorator :add_status, 201
    end
  end
end
