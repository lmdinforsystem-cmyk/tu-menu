// 1. IMPORTAR LA CLASE GESTOR DE FAVORITOS
import { GestorFavoritos } from "./classes/GestorFavorito.js";

// 2. CREAR EL GESTOR
const gestorFavoritos = new GestorFavoritos();

// 3. SELECCIONAR EL CONTENEDOR DEL HTML
const listaFavoritos = document.getElementById("lista-favoritos");

// 4. FUNCIÓN PARA MOSTRAR LOS FAVORITOS
function mostrarFavoritos() {

    // Recuperar las recetas guardadas
    const favoritos = gestorFavoritos.obtenerFavoritos();

    // Limpiar el contenedor
    listaFavoritos.innerHTML = "";

    // Comprobar si hay recetas favoritas
    if (favoritos.length === 0) {
        listaFavoritos.innerHTML = "<p>Aún no tienes recetas favoritas.</p>";
        return;
    }

    // Recorrer las recetas favoritas
    favoritos.forEach(function(receta) {

        // Crear tarjeta
        const tarjeta = document.createElement("article");
        tarjeta.classList.add("tarjeta-receta");

        // Crear imagen
        const imagen = document.createElement("img");
        imagen.src = receta.imagen;
        imagen.alt = receta.nombre;

        // Crear título
        const titulo = document.createElement("h3");
        titulo.textContent = receta.nombre;

        // Crear botón para eliminar
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar de favoritos";

        // Eliminar receta al pulsar el botón
        botonEliminar.addEventListener("click", function() {

            gestorFavoritos.eliminarFavorito(receta.id);

            mostrarFavoritos();

        });

        // Añadir elementos a la tarjeta
        tarjeta.appendChild(imagen);
        tarjeta.appendChild(titulo);
        tarjeta.appendChild(botonEliminar);

        // Añadir tarjeta al HTML
        listaFavoritos.appendChild(tarjeta);

    });

}

// 5. MOSTRAR LOS FAVORITOS AL ENTRAR EN LA PÁGINA
mostrarFavoritos();