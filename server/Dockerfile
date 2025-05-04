FROM php:8.2-apache

WORKDIR /var/www/html

# Install dependencies
RUN apt-get update && apt-get install -y \
    git curl zip unzip python3 python3-pip nodejs npm \
    libpng-dev libonig-dev libxml2-dev libzip-dev \
    && docker-php-ext-install pdo pdo_mysql mbstring exif pcntl bcmath gd zip

# Composer install (pull from official composer image)
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Install Python tools
RUN pip3 install --break-system-packages pytube youtube-transcript-api

# Copy Laravel code
COPY . .

# Install Laravel PHP dependencies
RUN composer install --no-interaction --prefer-dist --optimize-autoloader

# Fix permissions
RUN chown -R www-data:www-data /var/www && chmod -R 775 storage bootstrap/cache

EXPOSE 80

CMD ["apache2-foreground"]
