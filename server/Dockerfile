FROM php:8.2-apache

WORKDIR /var/www/html

# Install PHP extensions
RUN apt-get update && apt-get install -y \
    git unzip curl zip libpng-dev libonig-dev libxml2-dev libzip-dev \
    && docker-php-ext-install pdo pdo_mysql mbstring zip

# Add Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copy code
COPY . .

# # Build React frontend
# COPY ./client/vite-project ./resources/frontend
# WORKDIR /var/www/resources/frontend
# RUN npm install && npm run build

# # Move frontend build to Laravel public/
# WORKDIR /var/www
# RUN cp -r resources/frontend/dist/* public/


# Install Laravel dependencies
RUN composer install --no-interaction --prefer-dist --optimize-autoloader

# Fix permissions
RUN chmod -R 775 storage bootstrap/cache

EXPOSE 8000

CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]


# CMD ["apache2-foreground"]

# CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=80"]