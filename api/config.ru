# This file is used by Rack-based servers to start the application.

require_relative 'config/environment'

Signal.trap 'SIGTERM' do
  Process.kill('SIGINT', Process.pid)
end

run Rails.application
