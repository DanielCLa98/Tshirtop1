# Usa una imagen base ligera de Node.js
FROM node:20-alpine

# Define el directorio de trabajo dentro del contenedor
WORKDIR /app

# Variables de entorno configurables
ARG PORT
#ARG API_GATEWAY_HOST
#ARG API_GATEWAY_PORT
ARG AUTH_HOST
ARG AUTH_PORT
#ARG RECOVERY_HOST
#ARG RECOVERY_PORT

# Configuración de variables de entorno para Vite
ENV PORT=${PORT}
#ENV VITE_API_API_GATEWAY_HOST=${API_GATEWAY_HOST}
#ENV VITE_API_API_GATEWAY_PORT=${API_GATEWAY_PORT}
ENV VITE_API_HOST_AUTH_HOST=${AUTH_HOST}
ENV VITE_API_HOST_AUTH_PORT=${AUTH_PORT}
#ENV VITE_API_HOST_RECOVERY_HOST=${RECOVERY_HOST}
#ENV VITE_API_HOST_RECOVERY_PORT=${RECOVERY_PORT}

# Copia archivos de dependencias
COPY package.json package-lock.json ./

# Instala dependencias
RUN npm install

# Copia el código fuente
COPY . .

# Construye la aplicación con las variables de entorno
RUN npm run build

# Expone el puerto de la aplicación
EXPOSE ${PORT}

# Ejecuta Vite en modo preview
CMD ["sh", "-c", "npm run preview -- --port ${PORT}"]
