# Usamos Node.js como base
FROM node:20

# Carpeta de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiamos package.json e instalamos dependencias primero
COPY package*.json ./
RUN npm install

# Copiamos el resto del código fuente
COPY . .

# Exponemos el puerto de la API
EXPOSE 3000

# Comando por defecto para correr la API
CMD ["node", "src/index.js"]
