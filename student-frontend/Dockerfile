# Etapa 1: build Angular
FROM node:20 AS build

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration production

# Etapa 2: servir con Nginx
FROM nginx:stable-alpine

# Copiar build de Angular a la carpeta de Nginx
COPY --from=build /usr/src/app/dist/student-frontend/browser /usr/share/nginx/html

# Exponer puerto
EXPOSE 80

# Nginx ya arranca solo con CMD por defecto
