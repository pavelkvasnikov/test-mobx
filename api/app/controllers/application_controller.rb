require 'endpoint_flux/rails/concerns/endpoint_controller'

class ApplicationController < ActionController::API
  include EndpointFlux::Rails::Concerns::EndpointController
end
