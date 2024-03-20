# Usa una imagen de Node.js como base
FROM node:19-alpine3.15

# Argumentos para recibir valores de compilación
ARG BRANCH_NAME
ARG BUILD_NUMBER

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json (o yarn.lock) al directorio de trabajo
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install

# Copia el resto de la aplicación al directorio de trabajo
COPY ./dist ./dist

# Expone el puerto en el que la aplicación se ejecutará (si es necesario)
EXPOSE 3000

# Etiqueta para identificar la rama y el número de compilación
LABEL branch=$BRANCH_NAME
LABEL build_number=$BUILD_NUMBER

# Comando para iniciar la aplicación cuando se ejecute el contenedor
CMD ["npm", "run", "start:prod"]
