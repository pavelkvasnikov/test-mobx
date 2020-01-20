FROM ruby:2.6.0
WORKDIR /app
ADD . /app
COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock
RUN bundle install
COPY . /app
RUN rm -f /app/tmp/pids/server.pid
CMD ["rails", "server", "-b", "0.0.0.0", "-p", "3001"]
