# Guía para Configurar un Dominio Personalizado en Netlify

Esta guía te ayudará a configurar un dominio personalizado para el sitio web de Marphil Beauty Studio desplegado en Netlify.

## Opciones de Dominio

Tienes dos opciones principales:

1. **Comprar un nuevo dominio a través de Netlify**
2. **Usar un dominio que ya poseas**

## Opción 1: Comprar un Dominio a través de Netlify

### Paso 1: Acceder a la Configuración de Dominios

1. Inicia sesión en tu cuenta de Netlify
2. Selecciona tu sitio de Marphil Beauty Studio
3. Ve a la pestaña "Domain settings"
4. Haz clic en "Add custom domain"

### Paso 2: Comprar el Dominio

1. Ingresa el nombre de dominio que deseas (por ejemplo, marphilbeautystudio.com)
2. Haz clic en "Check availability"
3. Si está disponible, sigue las instrucciones para comprarlo
4. Completa la información de pago y finaliza la compra

### Paso 3: Configuración Automática

Netlify configurará automáticamente el dominio para que apunte a tu sitio. No necesitas hacer nada más.

## Opción 2: Usar un Dominio Existente

### Paso 1: Agregar el Dominio a Netlify

1. Inicia sesión en tu cuenta de Netlify
2. Selecciona tu sitio de Marphil Beauty Studio
3. Ve a la pestaña "Domain settings"
4. Haz clic en "Add custom domain"
5. Ingresa tu dominio existente y haz clic en "Verify"
6. Haz clic en "Add domain"

### Paso 2: Configurar los Registros DNS

Tienes dos opciones para configurar los registros DNS:

#### Opción A: Usar los Servidores de Nombres de Netlify (Recomendado)

1. En la sección "Domain settings", busca los servidores de nombres de Netlify (generalmente son 4)
2. Inicia sesión en tu proveedor de dominio actual
3. Busca la sección para cambiar los servidores de nombres
4. Reemplaza los servidores de nombres actuales por los de Netlify
5. Guarda los cambios

**Nota**: La propagación de los cambios de DNS puede tardar hasta 48 horas.

#### Opción B: Configurar Registros DNS Individuales

Si prefieres mantener tu proveedor de DNS actual:

1. En Netlify, ve a la sección "DNS settings" de tu dominio
2. Busca la sección "External DNS" para ver los registros necesarios
3. Inicia sesión en tu proveedor de dominio actual
4. Agrega los siguientes registros:
   - Un registro A que apunte a la IP de Netlify
   - Registros CNAME para www y otros subdominios

## Verificación y Configuración de HTTPS

### Paso 1: Verificar la Conexión del Dominio

1. Espera a que los cambios de DNS se propaguen (puede tardar hasta 48 horas)
2. Visita tu sitio usando el dominio personalizado
3. Verifica que el sitio se cargue correctamente

### Paso 2: Activar HTTPS

Netlify proporciona certificados SSL gratuitos a través de Let's Encrypt:

1. En la sección "Domain settings", busca "HTTPS"
2. Asegúrate de que "Provision SSL certificate" esté activado
3. Espera a que Netlify emita el certificado (puede tardar unos minutos)

### Paso 3: Forzar HTTPS

Para mayor seguridad, fuerza a todos los visitantes a usar HTTPS:

1. En la sección "Domain settings", busca "Force HTTPS"
2. Activa esta opción

## Configuración Adicional

### Redirecciones

Para redirigir automáticamente de www a no-www (o viceversa):

1. Ve a la sección "Domain settings"
2. Busca la opción "Primary domain"
3. Selecciona tu dominio preferido (con o sin www)

## Solución de Problemas

Si encuentras problemas durante la configuración del dominio:

1. Verifica que los registros DNS estén correctamente configurados
2. Usa herramientas como [DNSChecker](https://dnschecker.org/) para verificar la propagación de DNS
3. Consulta la [documentación de Netlify sobre dominios personalizados](https://docs.netlify.com/domains-https/custom-domains/)
4. Contacta con el soporte de Netlify si los problemas persisten