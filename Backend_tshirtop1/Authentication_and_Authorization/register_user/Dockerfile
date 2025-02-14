# Usamos la imagen base de Node.js
FROM node:14

# Establecemos el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copiamos los archivos package.json y package-lock.json (si los tienes)
COPY package*.json ./

# Instalamos las dependencias de Node.js
RUN npm install

# Copiamos todo el código fuente al contenedor
COPY . .

# Exponemos el puerto que la aplicación va a utilizar (puedes cambiar este puerto si es necesario)
EXPOSE 3015

# Establecemos las variables de entorno desde los secretos de GitHub Actions
# Estas variables serán accesibles dentro del contenedor
ENV DB_NAME=${REGISTER_USER_BD}
ENV DB_USER=${REGISTER_USER_U}
ENV DB_PASSWORD=${REGISTER_USER_PASS}
ENV DB_HOST=${REGISTER_USER_HOST}
ENV DB_DIALECT=${REGISTER_USER_DIALECT}
ENV SERVER_PORT=3015
EXPOSE 3015

# Comando para ejecutar la aplicación Node.js
CMD ["node", "server.js"]
