require 'em-websocket'
require 'bunny'
require 'json'
sleep 30
puts 'Ready'

EventMachine.run do
  @clients = []
  conn = Bunny.new('amqp://guest:guest@rabbitmq:5672')
  conn.start
  ch = conn.create_channel

  q = ch.queue('data-update')
  puts "WEBSOCKET STARTED"
  q.subscribe do |delivery_info, properties, payload|
    puts "!!!!___ #{payload}"
    if payload['event_type'] = 'data_updated'
      @clients.each do |socket|
        socket.send({route: 'articles'}.to_json)
      end
    end
  end
 # CreateArticleService.call(article: {  name: 'test4', description: 'descr4', article_type: 'insta', story_id: 3 })

  EM::WebSocket.start(:host => '0.0.0.0', :port => '3006') do |ws|
    ws.onopen do |handshake|
      @clients << ws
      ws.send "Connected to #{handshake.path}."
    end

    ws.onclose do
      ws.send 'Closed.'
      @clients.delete ws
    end

    ws.onmessage do |msg|
      puts "Received Message: #{msg}"
      @clients.each do |socket|
        socket.send msg
      end
    end
  end
end







