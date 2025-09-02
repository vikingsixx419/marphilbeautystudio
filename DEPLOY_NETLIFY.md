# Guía de Despliegue en Netlify

Esta guía te ayudará a desplegar el sitio web de Marphil Beauty Studio en Netlify para que esté disponible online.

## Requisitos Previos

1. Una cuenta en [Netlify](https://www.netlify.com/) (puedes registrarte gratis)
2. Una cuenta en GitHub, GitLab o Bitbucket para alojar tu repositorio

## Pasos para el Despliegue

### 1. Preparar el Repositorio

1. Crea un nuevo repositorio en GitHub, GitLab o Bitbucket
2. Sube todos los archivos del proyecto a este repositorio:
   - index.html
   - styles.css
   - script.js
   - netlify.toml
   - package.json
   - .gitignore
   - README.md
   - Cualquier imagen o recurso adicional

### 2. Desplegar en Netlify

1. Inicia sesión en tu cuenta de Netlify
2. En el dashboard, haz clic en "New site from Git"

   ![Paso 1: Nuevo sitio](https://i.imgur.com/example1.png)

3. Selecciona el proveedor de Git donde alojaste tu repositorio (GitHub, GitLab o Bitbucket)

   ![Paso 2: Seleccionar proveedor](https://i.imgur.com/example2.png)

4. Autoriza a Netlify para acceder a tus repositorios si es necesario
5. Selecciona el repositorio que contiene el sitio web de Marphil Beauty Studio

   ![Paso 3: Seleccionar repositorio](https://i.imgur.com/example3.png)

6. Configura las opciones de despliegue:
   - **Branch to deploy**: main (o master)
   - **Build command**: Dejar en blanco (ya que no necesitamos un proceso de construcción)
   - **Publish directory**: / (la raíz del proyecto)

   ![Paso 4: Configurar despliegue](https://i.imgur.com/example4.png)

7. Haz clic en "Deploy site"
8. Espera a que Netlify complete el despliegue (normalmente toma menos de un minuto)

### 3. Acceder al Sitio Desplegado

1. Una vez completado el despliegue, Netlify te proporcionará una URL aleatoria (por ejemplo: https://marphil-beauty-studio.netlify.app)
2. Haz clic en la URL para verificar que el sitio se ha desplegado correctamente

   ![Paso 5: Sitio desplegado](https://i.imgur.com/example5.png)

### 4. Configurar un Dominio Personalizado (Opcional)

1. En el dashboard de Netlify, ve a la sección "Domain settings" de tu sitio
2. Haz clic en "Add custom domain"
3. Ingresa el dominio que deseas utilizar (por ejemplo: marphilbeautystudio.com)
4. Sigue las instrucciones para configurar los registros DNS de tu dominio

   ![Paso 6: Dominio personalizado](https://i.imgur.com/example6.png)

## Actualizar el Sitio

Cada vez que realices cambios en tu repositorio y los subas, Netlify automáticamente detectará los cambios y volverá a desplegar tu sitio con las actualizaciones.

## Soporte

Si encuentras algún problema durante el despliegue, puedes consultar la [documentación oficial de Netlify](https://docs.netlify.com/) o contactar con su soporte técnico.