# Comandos para el Proyecto

## Configuración de Compilación

```bash
# Instalar dependencias
$ npm installg

# Servir con recarga en caliente en localhost:3000
$ npm run dev

# Compilar para producción y lanzar el servidor
$ npm run build
$ npm run start

# Generar proyecto estático
$ npm run generate
```

## Build Github
```bash
#Si en algún momento del proceso sale un menú que no deja avanzar, solo se debe poner :q para salir

# Instalar Git
$ git init

# Vincularlo al repositorio
$ git remote add origin "nombre del repositorio en GitHub"

# Nos muestra en que repositorio estamos enlazados remotamente.
$ git remote -v

# Verificar los archivos o solo los archivos modificados
$ git status
$ git status -s # se puede agregar -b para ver la rama a la que pertenece

# Añadir todos los cambios o cambios en un archivo específico
$ git add .  # o $ git add "nombredelarchivo"

# Verificar los archivos nuevamente o solo los archivos modificados
$ git status
$ git status -s # se puede agregar -b para ver la rama a la que pertenece

# Crear un cambio con una descripción
$ git commit -m "<CAMBIOS DEL COMMIT>"

# Guardar los cambios en el commit actual y subirlos
$ git commit --amend --no-edit # si queremos modificar el mensaje del commit solo ponemos $ git commit --amend -m "descripción"

# Subir los cambios (commits) o establecer el upstream si es un proyecto nuevo
$ git push  # o $ git push --set-upstream origin master

# Ver los commits creados actuales o en general
$ git log --oneline 
$ git log --graph --oneline
$ git reflog

# Para hacer un commit en otra rama 
$ git log --oneline master.."nombredelarama"

# Mostrar las ramas del proyecto o del remoto
$ git branch
$ git branch -a

# Cambiar de rama del proyecto
$ git checkout "nombredelarama"

# Retroceder a un commit específico
$ git reset --hard "códigodelcommit"

# Deshacer el último commit manteniendo y sin mantener los cambios en el área de preparación
$ git reset --soft HEAD^
$ git reset --hard HEAD^

# Borrar un commit y guardar los cambios
$ git rebase -i "codigodelcommitanterioralqueseeliminará (puede ser encontrado en github mismo)" #o con cabezas HEAD@{"número"}
$ git rebase --continue
$ git push origin "nombredelarama" --force

# Obtener archivos de GitHub para nuestro repositorio local
$ git pull

#Crear tags con Versiones de la aplicación
$ git tag "nombre de la versión" -m "Descripción de la versión"

#Subir o actualizar a Github el tag creado
$ git push --tag 

#Ver los tags creados
$ git tag

#Borrar tags
$ git tag -d "Nombre de la versión"

```

Para obtener una explicación detallada sobre cómo funcionan las cosas, consulta la [documentación](https://nuxtjs.org).

## Directorios Especiales

Puedes crear los siguientes directorios adicionales, algunos de los cuales tienen comportamientos especiales. Solo `pages` es necesario; puedes eliminarlos si no deseas utilizar su funcionalidad.

### `assets`

El directorio de activos contiene tus activos sin compilar, como archivos Stylus o Sass, imágenes o fuentes.

Más información sobre el uso de este directorio en [la documentación](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

El directorio de componentes contiene tus componentes Vue.js. Los componentes conforman las diferentes partes de tu página y pueden reutilizarse e importarse en tus páginas, diseños e incluso otros componentes.

Más información sobre el uso de este directorio en [la documentación](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Los diseños son de gran ayuda cuando deseas cambiar la apariencia de tu aplicación Nuxt, ya sea que desees incluir una barra lateral o tener diseños distintos para dispositivos móviles y de escritorio.

Más información sobre el uso de este directorio en [la documentación](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `pages`

Este directorio contiene las vistas y rutas de tu aplicación. Nuxt leerá todos los archivos `*.vue` dentro de este directorio y configurará automáticamente Vue Router.

Más información sobre el uso de este directorio en [la documentación](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

El directorio de complementos contiene complementos de JavaScript que deseas ejecutar antes de instanciar la raíz de la aplicación Vue.js. Este es el lugar para agregar complementos de Vue e inyectar funciones o constantes. Cada vez que necesites usar `Vue.use()`, debes crear un archivo en `plugins/` y agregar su ruta a los complementos en `nuxt.config.js`.

Más información sobre el uso de este directorio en [la documentación](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

Este directorio contiene tus archivos estáticos. Cada archivo dentro de este directorio se asigna a `/`.

Ejemplo: `/static/robots.txt` se asigna como `/robots.txt`.

Más información sobre el uso de este directorio en [la documentación](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

Este directorio contiene tus archivos de la tienda Vuex. Crear un archivo en este directorio activa automáticamente Vuex.

Más información sobre el uso de este directorio en [la documentación](https://nuxtjs.org/docs/2.x/directory-structure/store).