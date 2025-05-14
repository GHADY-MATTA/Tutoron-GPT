# --- Stage 1: Build React ---
FROM node:18 as builder

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

# --- Stage 2: Serve with Nginx ---
FROM nginx:alpine

# Clean default Nginx conf
RUN rm /etc/nginx/conf.d/default.conf

# Copy your custom Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built frontend to Nginx HTML folder
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
