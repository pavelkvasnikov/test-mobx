class Notification
  def initialize
    sleep 20
    @conn = Bunny.new('amqp://guest:guest@rabbitmq:5672')
    @conn.start
    @ch = @conn.create_channel

    @q = @ch.queue('data-update')
  end

  def trigger_event(params)
    @ch.default_exchange.publish(params.to_json, routing_key: @q.name)
  end

end

::EventTrigger = Notification.new
