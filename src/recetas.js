import { buscarRecetasPorCategoria } from "./services/ApiService.js";

// Seleccionamos los elementos del HTML
const botonesCategorias = document.querySelectorAll(".categoria");
const listaRecetas = document.getElementById("lista-recetas");
const mensajeRecetas = document.getElementById("mensaje-recetas");

// Función para mostrar las recetas
function mostrarRecetas(recetas) {

    listaRecetas.innerHTML = "";

    if (!recetas) {
        mensajeRecetas.textContent = "No se encontraron recetas.";
        return;
    }

    recetas.forEach(function(receta) {

        const tarjeta = document.createElement("article");
        tarjeta.classList.add("tarjeta-receta");

        const imagen = document.createElement("img");
        imagen.src = receta.strMealThumb;
        imagen.alt = receta.strMeal;

        const titulo = document.createElement("h3");
        titulo.textContent = receta.strMeal;

        tarjeta.appendChild(imagen);
        tarjeta.appendChild(titulo);

        listaRecetas.appendChild(tarjeta);
    });
}

// Recorremos los botones de categorías
botonesCategorias.forEach(function(boton) {

    boton.addEventListener("click", async function() {

        const categoria = boton.dataset.categoria;

        mensajeRecetas.textContent = "Cargando recetas...";

        try {
            const recetas = await buscarRecetasPorCategoria(categoria);

            mensajeRecetas.textContent = "Recetas de " + boton.textContent;

            mostrarRecetas(recetas);

        } catch (error) {
            mensajeRecetas.textContent = "No se pudieron cargar las recetas.";
            console.error(error);
        }
    });
});