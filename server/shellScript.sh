#!/bin/bash

# Exit immediately if a command fails
set -e

# Ensure .env exists
if [ ! -f .env ]; then
  cp .env.example .env
fi

# Generate app key (only if not already set)
if ! grep -q "APP_KEY=base64" .env; then
  php artisan key:generate
fi

# (Optional) Run JWT secret setup if you're using JWT
# php artisan jwt:secret --force

# Cache config and run migrations
php artisan config:cache
php artisan migrate --force

# Start Laravel dev server (on port 8000)
php artisan serve --host=0.0.0.0 --port=8000
