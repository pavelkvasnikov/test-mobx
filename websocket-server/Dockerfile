FROM ruby:2.6.0

COPY Gemfile* /tmp/
WORKDIR /tmp
RUN gem install bundler
RUN bundle install

WORKDIR /app
ADD . /app
