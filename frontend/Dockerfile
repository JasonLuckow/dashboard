
# Build step
FROM node:18 AS builder
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 5173
RUN npm run build

# Serve step
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
