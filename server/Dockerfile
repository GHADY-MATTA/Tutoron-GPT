FROM php:8.2-apache

WORKDIR /var/www/html

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git curl zip unzip python3 python3-pip nodejs npm \
    libpng-dev libonig-dev libxml2-dev libzip-dev \
    && docker-php-ext-install pdo pdo_mysql mbstring exif pcntl bcmath gd zip

# Install Composer
# RUN curl -sS https://getcomposer.org/installer | php && mv composer.phar /usr/local/bin/composer 

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Install Python packages
RUN pip3 install --break-system-packages pytube youtube-transcript-api

# Copy backend code copying all file to my image
COPY . .


# Install Laravel dependencies
RUN composer install --no-interaction --prefer-dist --optimize-autoloader



# # Build React frontend
# COPY ./client/vite-project ./resources/frontend
# WORKDIR /var/www/resources/frontend
# RUN npm install && npm run build

# # Move frontend build to Laravel public/
# WORKDIR /var/www
# RUN cp -r resources/frontend/dist/* public/




# Permissions
RUN chown -R www-data:www-data /var/www && chmod -R 775 storage bootstrap/cache

# Expose port 80 for Laravel artisan serve
EXPOSE 80


CMD ["apache2-foreground"]

# CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=80"]
