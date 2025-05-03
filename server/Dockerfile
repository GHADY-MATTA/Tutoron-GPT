FROM php:8.2-fpm

WORKDIR /var/www

# Install system deps
RUN apt-get update && apt-get install -y \
    git curl zip unzip python3 python3-pip nodejs npm libpng-dev libonig-dev libxml2-dev libzip-dev \
    && docker-php-ext-install pdo pdo_mysql mbstring exif pcntl bcmath gd zip

# Composer
RUN curl -sS https://getcomposer.org/installer | php && mv composer.phar /usr/local/bin/composer

# Python libs
RUN pip3 install --break-system-packages pytube youtube-transcript-api

# Copy everything
COPY . .

# Install PHP dependencies
RUN composer install --no-interaction --prefer-dist --optimize-autoloader

# Install and build React frontend inside Laravel (optional)
WORKDIR /var/www/resources/frontend
RUN npm install && npm run build

# Move built React assets to public
WORKDIR /var/www
RUN cp -r resources/frontend/dist/* public/

# Permissions
RUN chown -R www-data:www-data /var/www && chmod -R 775 storage bootstrap/cache

EXPOSE 8000

CMD php artisan serve --host=0.0.0.0 --port=8000
