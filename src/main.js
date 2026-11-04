// 1. IMPORTACIONES
import { buscarRecetas } from "./services/ApiService.js";


// 2. SELECCIONAR ELEMENTOS DEL HTML
const inputIngrediente = document.getElementById("ingrediente");
const botonBuscar = document.getElementById("btn-buscar");
const listaRecetas = document.getElementById("lista-recetas");


// 3. FUNCIÓN PARA MOSTRAR LAS RECETAS
function mostrarRecetas(recetas) {

    // Limpiar los resultados anteriores
    listaRecetas.innerHTML = "";

    // Recorrer las recetas recibidas de la API
    recetas.forEach(function(receta) {

        // Crear tarjeta
        const tarjeta = document.createElement("article");
        tarjeta.classList.add("tarjeta-receta");

        // Crear imagen
        const imagen = document.createElement("img");
        imagen.src = receta.strMealThumb;
        imagen.alt = receta.strMeal;

        // Crear título
        const titulo = document.createElement("h3");
        titulo.textContent = receta.strMeal;

        // Añadir imagen y título a la tarjeta
        tarjeta.appendChild(imagen);
        tarjeta.appendChild(titulo);

        // Añadir tarjeta al contenedor de resultados
        listaRecetas.appendChild(tarjeta);

    });

}


// 4. EVENTO DEL BOTÓN BUSCAR RECETAS
botonBuscar.addEventListener("click", async function() {

    // Recoger el ingrediente escrito por el usuario
    const ingrediente = inputIngrediente.value.trim();

    // Comprobar que el campo no esté vacío
    if (ingrediente === "") {
        alert("Escribe un ingrediente para buscar recetas");
        return;
    }

    try {

        // Consultar la API
        const recetas = await buscarRecetas(ingrediente);

        // Comprobar si hay resultados
        if (!recetas || recetas.length === 0) {

            listaRecetas.innerHTML = "<p>No se han encontrado recetas con ese ingrediente.</p>";
            return;

        }

        // Mostrar las recetas
        mostrarRecetas(recetas);

    } catch (error) {

        console.error("Error al buscar recetas:", error);

        listaRecetas.innerHTML = "<p>Ha ocurrido un error al buscar las recetas. Inténtalo de nuevo.</p>";

    }

});


// 5. PERMITIR BUSCAR PULSANDO ENTER
inputIngrediente.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        botonBuscar.click();
    }

});