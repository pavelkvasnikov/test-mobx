require 'endpoint_flux'

EndpointFlux.config.middlewares_namespaces << 'middlewares'

EndpointFlux.config.default_middlewares :authenticator, :skip
EndpointFlux.config.default_middlewares :authorizator, :skip
EndpointFlux.config.default_middlewares :validator, :empty
EndpointFlux.config.default_middlewares :policy,    :skip
EndpointFlux.config.default_middlewares :decorator, :skip


EndpointFlux::Endpoint.class_eval do
  define_method(:raise_validation_error) do |errors|
    raise EndpointFlux::Exceptions::Validation, errors
  end
end
