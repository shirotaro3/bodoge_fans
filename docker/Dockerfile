FROM php:7.4.0-apache
COPY ./php/php.ini /usr/local/etc/php/

RUN apt-get update \
  && apt-get install -y libzip-dev libpq-dev libonig-dev unzip \
  && docker-php-ext-install pgsql pdo pdo_pgsql zip \
  && a2enmod rewrite

COPY ./apache/*.conf /etc/apache2/sites-enabled/

# composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# node.js
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash - \
  && apt-get install -y nodejs

# yarn
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
  && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
  && apt-get update && apt-get install -y yarn

ENV COMPOSER_ALLOW_SUPERUSER 1
ENV COMPOSER_HOME /composer
ENV PATH $PATH:/composer/vendor/bin

WORKDIR /var/www/html

RUN composer global require "laravel/installer"