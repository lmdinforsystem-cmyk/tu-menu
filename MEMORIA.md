# TuMenú – Memoria técnica del proyecto

## 1. Introducción

TuMenú es una aplicación web de recetas que he desarrollado durante el bootcamp de JavaScript para poner en práctica lo aprendido.

La idea surgió para facilitar la búsqueda de recetas según los ingredientes que tenemos en casa. También permite descubrir recetas por categorías y guardar las que más nos gustan.

Para conseguirlo he utilizado una API externa llamada TheMealDB y LocalStorage para conservar los favoritos.

## 2. Objetivos

El objetivo principal ha sido crear una página web sencilla, visual y fácil de utilizar, aplicando HTML, CSS y JavaScript.

Con este proyecto he querido aprender a:
- Buscar recetas por ingredientes.
- Mostrar recetas organizadas por categorías.
- Guardar y eliminar recetas favoritas.
- Dar funcionalidad a la página mediante JavaScript.
- Conectar la aplicación con una API externa.
- Guardar información en el navegador.
- Organizar el código utilizando diferentes archivos y módulos.

## 3. Tecnologías utilizadas

Para desarrollar el proyecto he utilizado:

- **HTML5:** para crear la estructura de las páginas.
- **CSS3:** para dar estilo y adaptar el diseño a móviles y ordenadores.
- **JavaScript:** para añadir las funcionalidades y la interacción.
- **TheMealDB:** API utilizada para obtener las recetas.
- **LocalStorage:** para guardar los favoritos.
- **Font Awesome:** para añadir iconos.
- **Visual Studio Code:** como editor de código.
- **Git y GitHub:** para guardar los cambios y controlar las versiones del proyecto.

## 4. Organización del proyecto

He organizado los archivos en diferentes carpetas para tener separado el HTML, el CSS y JavaScript.

La estructura principal es:

```text
tu-menu/
│
├── index.html
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
│   ├── classes/
│   ├── services/
│   └── utils/
│
├── assets/
│   └── img/
│
├── README.md
└── MEMORIA.md
```

Esta organización me ha ayudado a tener el código más ordenado y a localizar mejor cada parte de la aplicación.

## 5. Diseño de la aplicación

He buscado un diseño sencillo y agradable, utilizando principalmente tonos verdes y colores claros relacionados con la cocina y la alimentación.

He trabajado con un diseño *mobile-first*, empezando por la versión para móviles y adaptándolo después a pantallas más grandes.

La web cuenta con una cabecera para navegar entre las secciones y un pie de página con enlaces a redes sociales.

## 6. Funcionalidades principales

La aplicación está dividida en cuatro secciones:

- **Inicio:** es la página principal y permite acceder al resto de apartados.
- **Mi nevera:** permite añadir y eliminar ingredientes y buscar recetas utilizando los ingredientes disponibles.
- **Recetas:** permite descubrir platos seleccionando categorías como pollo, carnes, pescados, vegetarianas, pastas o postres.
- **Favoritos:** permite guardar recetas para consultarlas más adelante y eliminarlas cuando ya no las queramos.

## 7. JavaScript y conexión con la API

JavaScript es el encargado de que la aplicación funcione y responda a las acciones del usuario.

Durante el desarrollo he trabajado con funciones, eventos, manipulación del DOM, módulos, clases y programación asíncrona.

Para buscar las recetas utilizo `fetch()`, que permite realizar peticiones a TheMealDB. Después recibo los datos en formato JSON y los muestro en la página mediante JavaScript.

He separado estas peticiones en el archivo `ApiService.js` para tenerlas organizadas en un mismo lugar.

## 8. Almacenamiento de favoritos

Para que las recetas favoritas no desaparezcan al cerrar la página he utilizado LocalStorage.

Los datos se guardan utilizando `JSON.stringify()` y se recuperan con `JSON.parse()`.

De esta forma, los favoritos siguen disponibles cuando se vuelve a abrir la aplicación en el mismo navegador.

## 9. Dificultades y aprendizaje

Durante el desarrollo me encontré con algunas dificultades, sobre todo al organizar los archivos, configurar las rutas, conectar la API y trabajar con los elementos del DOM.

También tuve que realizar diferentes pruebas para comprobar que las páginas, las búsquedas y los favoritos funcionaran correctamente.

Aunque algunas partes me resultaron complicadas, el proyecto me ha ayudado a entender mejor cómo se relacionan HTML, CSS y JavaScript en una aplicación real.

## 10. Conclusión y mejoras futuras

Con TuMenú he podido poner en práctica los conocimientos adquiridos durante el bootcamp y aprender a desarrollar una aplicación desde cero.

Me ha servido especialmente para trabajar con JavaScript, consumir una API, guardar información en el navegador y organizar mejor el código.

Como mejoras futuras, me gustaría añadir la traducción de las recetas, mostrar más detalles de cada plato y ampliar las opciones de búsqueda.

En definitiva, TuMenú ha sido una buena oportunidad para practicar, aprender de los errores y ver cómo poco a poco una idea se convierte en una aplicación funcional.
