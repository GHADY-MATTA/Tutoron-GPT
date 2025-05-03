# Stage 1: Build
FROM node:18 AS builder

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:stable-alpine

# Remove default Nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy built assets from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom Nginx config (optional, for clean URLs or proxying)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
