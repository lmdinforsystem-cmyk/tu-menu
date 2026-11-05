# TuMenú – Memoria técnica del proyecto

## 1. Introducción

TuMenú es una aplicación web de recetas desarrollada como proyecto práctico para poner en práctica los conocimientos adquiridos durante el bootcamp de JavaScript.

La aplicación permite buscar recetas a partir de ingredientes disponibles en casa, descubrir nuevas recetas por categorías y guardar las recetas favoritas.

Para obtener la información de las recetas se utiliza una API externa llamada TheMealDB. Además, se utiliza LocalStorage para guardar los favoritos en el navegador.

## 2. Objetivos del proyecto

El objetivo principal es desarrollar una aplicación web dinámica utilizando HTML, CSS y JavaScript, aplicando los conocimientos de programación adquiridos durante el bootcamp.

Los objetivos específicos son:

- Crear una interfaz sencilla, intuitiva y adaptable a diferentes dispositivos.
- Permitir la búsqueda de recetas por ingredientes.
- Mostrar recetas organizadas por categorías.
- Permitir guardar y eliminar recetas favoritas.
- Utilizar JavaScript para manipular el contenido de la página.
- Trabajar con una API externa mediante peticiones `fetch`.
- Aplicar conceptos de programación orientada a objetos (POO).
- Guardar información en el almacenamiento local del navegador.

## 3. Tecnologías utilizadas

Para desarrollar TuMenú se han utilizado las siguientes tecnologías:

- **HTML5:** estructura y contenido de las páginas.
- **CSS3:** diseño, estilos y adaptación a diferentes tamaños de pantalla.
- **JavaScript:** funcionalidad e interacción de la aplicación.
- **TheMealDB API:** servicio externo para obtener información sobre recetas.
- **LocalStorage:** almacenamiento de las recetas favoritas en el navegador.
- **Font Awesome:** biblioteca de iconos utilizada en la interfaz.
- **Visual Studio Code:** editor de código utilizado durante el desarrollo.
- **Git y GitHub:** control de versiones y almacenamiento del proyecto.

## 4. Estructura del proyecto

El proyecto está organizado en diferentes carpetas y archivos para separar el contenido, los estilos y la lógica de JavaScript.

La estructura principal es:


tu-menu/
│
├── index.html
│
├── pages/
│   ├── mi-nevera.html
│   ├── recetas.html
│   └── favoritos.html
│
├── css/
│   ├── styles.css
│   ├── mi-nevera.css
│   ├── recetas.css
│   └── favoritos.css
│
├── src/
│   ├── main.js
│   ├── recetas.js
│   ├── favoritos.js
│   │
│   ├── classes/
│   │   ├── Receta.js
│   │   ├── Inventario.js
│   │   └── GestorFavorito.js
│   │
│   ├── services/
│   │   └── ApiService.js
│   │
│   └── utils/
│       └── storage.js
│
├── assets/
│   └── img/
│
├── README.md
└── MEMORIA.md

La carpeta `pages` contiene las diferentes páginas de la aplicación. La carpeta `css` contiene los archivos de estilos y `src` reúne los archivos JavaScript.

Dentro de `src` se separan las clases, los servicios y las funciones auxiliares para mantener el código organizado.

## 5. Diseño e interfaz

La aplicación cuenta con un diseño sencillo y visual, utilizando colores relacionados con la cocina y la alimentación.

Se ha desarrollado siguiendo un enfoque mobile-first, comenzando por el diseño para dispositivos móviles y adaptándolo posteriormente a pantallas más grandes mediante media queries.

La aplicación dispone de una cabecera con el logotipo y el menú de navegación, un contenido principal para cada sección y un pie de página con enlaces a redes sociales.

## 6. Funcionalidades principales

### 6.1. Inicio

Es la página principal de TuMenú. Desde ella se puede acceder a las diferentes secciones de la aplicación.

### 6.2. Mi nevera

Esta sección permite introducir ingredientes disponibles en casa y utilizarlos para buscar recetas.

JavaScript recoge los ingredientes introducidos por el usuario y realiza una petición a la API para obtener recetas relacionadas.

También permite añadir y eliminar ingredientes de la lista.

### 6.3. Recetas

Esta sección permite descubrir recetas mediante diferentes categorías.

El usuario puede seleccionar categorías como pollo, carnes, pescados, vegetarianas, pastas o postres.

Al seleccionar una categoría, JavaScript realiza una petición a TheMealDB y muestra las recetas correspondientes mediante tarjetas con imágenes y nombres.

### 6.4. Favoritos

Esta sección permite guardar recetas favoritas para consultarlas posteriormente.

Los datos se almacenan en LocalStorage, por lo que permanecen guardados en el navegador aunque se cierre o se vuelva a abrir la página.

También es posible eliminar recetas de la lista de favoritos.

## 7. Desarrollo con JavaScript

JavaScript se utiliza para añadir dinamismo e interacción a la aplicación.

Durante el desarrollo se han trabajado diferentes conceptos:

- Variables y constantes.
- Funciones y parámetros.
- Eventos y escuchadores de eventos.
- Manipulación del DOM.
- Creación y modificación de elementos HTML.
- Peticiones asíncronas mediante `async` y `await`.
- Consumo de APIs mediante `fetch`.
- Módulos mediante `import` y `export`.
- Gestión de errores mediante `try` y `catch`.

También se han utilizado clases para organizar el código y aplicar conceptos de programación orientada a objetos.

## 8. Conexión con TheMealDB API

Para obtener información sobre las recetas se utiliza TheMealDB, una API externa que proporciona datos como nombres, imágenes e información de diferentes platos.

Las peticiones se encuentran organizadas en el archivo `ApiService.js`.

Se utilizan diferentes consultas:

- Búsqueda de recetas por ingredientes.
- Obtención de los detalles de una receta mediante su identificador.
- Búsqueda de recetas por categoría.

Para realizar estas consultas se utiliza `fetch()`. Las respuestas se procesan mediante JSON para poder utilizar los datos desde JavaScript.

## 9. Almacenamiento de datos

Para conservar las recetas favoritas se utiliza LocalStorage.

Los datos se convierten a formato JSON mediante `JSON.stringify()` antes de guardarlos.

Para recuperarlos se utiliza `JSON.parse()`, que permite volver a trabajar con los datos desde JavaScript.

Las operaciones de almacenamiento y recuperación se encuentran separadas en el archivo `storage.js`.

## 10. Pruebas y dificultades durante el desarrollo

Durante la creación de TuMenú se han realizado pruebas para comprobar el funcionamiento de las diferentes secciones.

Entre las tareas realizadas se encuentran:

- Comprobar la navegación entre páginas.
- Verificar la búsqueda de recetas mediante la API.
- Comprobar la carga de imágenes y nombres de recetas.
- Probar la incorporación y eliminación de ingredientes.
- Comprobar el almacenamiento de favoritos.
- Revisar las rutas de los archivos HTML, CSS y JavaScript.
- Comprobar la adaptación del diseño a diferentes tamaños de pantalla.

Durante el desarrollo también surgieron dificultades relacionadas con la organización de archivos, las rutas relativas, la conexión con la API y la manipulación del DOM.

Estas situaciones permitieron practicar la detección y corrección de errores.

## 11. Conclusiones y posibles mejoras

El desarrollo de TuMenú ha permitido poner en práctica los conocimientos de HTML, CSS y JavaScript, especialmente la manipulación del DOM, los eventos, las peticiones a APIs externas y el almacenamiento de información en el navegador.

También ha servido para comprender mejor cómo organizar un proyecto mediante diferentes archivos y módulos, y cómo aplicar conceptos de programación orientada a objetos.

Como posibles mejoras futuras se podrían incorporar:

- Traducción de los nombres e instrucciones de las recetas.
- Visualización más completa de los detalles de cada receta.
- Filtros adicionales de búsqueda.
- Mejoras en la gestión de ingredientes y favoritos.
- Nuevas categorías y funcionalidades.

TuMenú es una primera aplicación que permite seguir ampliando y practicando los conocimientos adquiridos durante el bootcamp.