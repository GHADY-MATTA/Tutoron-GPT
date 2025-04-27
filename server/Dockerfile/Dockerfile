# Use the official PHP image with necessary extensions
FROM php:8.2-fpm

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip

# Install PHP extensions
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /var/www

# Copy all project files into the container
COPY . .

# Install PHP dependencies
RUN composer install --prefer-dist --no-scripts --no-autoloader

# Rebuild autoload after copying files
RUN composer dump-autoload

# Set proper permissions
RUN chown -R www-data:www-data /var/www
RUN chmod -R 755 /var/www

# Expose port 9000 and start php-fpm server
EXPOSE 9000
CMD ["php-fpm"]
