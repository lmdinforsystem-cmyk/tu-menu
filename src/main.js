
// 1. IMPORTACIONES
import { buscarRecetas, buscarDetalleReceta } from "./services/ApiService.js";
import { Receta } from "./classes/Receta.js";
import { GestorFavoritos } from "./classes/GestorFavorito.js";

//CREAR EL GESTOR DE FAVORITOS

const gestorFavoritos = new GestorFavoritos();

// 2. SELECCIONAR ELEMENTOS DEL HTML
const inputIngrediente = document.getElementById("ingrediente");
const botonBuscar = document.getElementById("btn-buscar");
const listaRecetas = document.getElementById("lista-recetas");
const detalleReceta = document.getElementById("detalle-receta");
const contenidoDetalle = document.getElementById("contenido-detalle");


// 3. FUNCIÓN PARA MOSTRAR LAS RECETAS EN TARJETAS
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

        //CREAMOS EL BOTON FAVORITOS
        const botonFavorito = document.createElement("button");
        botonFavorito.textContent = "❤️";
        botonFavorito.classList.add("boton-favorito");

        //AL PULSAR EL BOTON GUARDAMOS LA RECETA
        botonFavorito.addEventListener("click", function(event){
               // Evitamos que se abra el detalle de la receta
         event.stopPropagation();

        // Guardamos los datos básicos de la receta
            const recetaFavorita = {
            id: receta.idMeal,
            nombre: receta.strMeal,
            imagen: receta.strMealThumb
            };

        gestorFavoritos.agregarFavorito(recetaFavorita);

         //CAMBIAMOS EL CORAZON PARA INDICAR QUE SE HA GUARDADP
        botonFavorito.textContent = "💚";

    });


        // Añadir imagen y título a la tarjeta
        tarjeta.appendChild(imagen);
        tarjeta.appendChild(titulo);
        tarjeta.appendChild(botonFavorito);

        // Al hacer clic, consultar los detalles de la receta
        tarjeta.addEventListener("click", async function() {

            try {

                const datos = await buscarDetalleReceta(receta.idMeal);
                console.log(datos);

                // Crear un objeto de nuestra clase Receta
                const recetaCompleta = new Receta(datos);

                // Mostrar los detalles en pantalla
                mostrarDetalleReceta(recetaCompleta);

            } catch (error) {
                console.error("Error al obtener los detalles:", error);
            }

        });

        // Añadir tarjeta al contenedor de resultados
        listaRecetas.appendChild(tarjeta);
    });
}


// 4. FUNCIÓN PARA MOSTRAR LOS DETALLES DE UNA RECETA
    function mostrarDetalleReceta(receta) {

    // Limpiar los resultados anteriores
    listaRecetas.innerHTML = "";

    // Recorrer los ingredientes y crear una lista HTML
    const ingredientesHTML = receta.ingredientes.map(function(ingrediente) {
        return `<li>${ingrediente.cantidad || ""} ${ingrediente.nombre}</li>`;
    }).join("");

    // Insertar toda la información en el HTML
    contenidoDetalle.innerHTML = `
        <img class="imagen-detalle" src="${receta.imagen}" alt="${receta.nombre}">
        
        <h2 class="titulo-detalle">${receta.nombre}</h2>

        <div class="informacion-receta">
            <p><strong>Categoría: </strong> ${receta.categoria || "No disponible"}</p>
            <p><strong>Origen: </strong> ${receta.origen || "No disponible"}</p>
        </div>
        
        
        <div class="ingredientes-receta">
            <h3>Ingredientes</h3>
             <ul>${ingredientesHTML}</ul>
        </div>
        
        <div class="preparacion-receta">
            <h3>Preparación</h3>
             <p>${receta.instrucciones}</p>
        </div>
        
    `;

    // Mostrar el apartado de detalles
    detalleReceta.hidden = false;

    // Desplazarse hasta los detalles
    detalleReceta.scrollIntoView({ behavior: "smooth" });
}


// 5. EVENTO DEL BOTÓN BUSCAR RECETAS
botonBuscar.addEventListener("click", async function() {

    const ingrediente = inputIngrediente.value.trim();

    if (ingrediente === "") {
        alert("Escribe un ingrediente para buscar recetas");
        return;
    }

    try {

        const recetas = await buscarRecetas(ingrediente);

        if (!recetas || recetas.length === 0) {
            listaRecetas.innerHTML = "<p>No se han encontrado recetas con ese ingrediente.</p>";
            detalleReceta.hidden = true;
            contenidoDetalle.innerHTML = "";
            return;
        }

       

        // Ocultar los detalles de una búsqueda anterior
        detalleReceta.hidden = true;
        contenidoDetalle.innerHTML = "";

        //Mostrar los nuevos resultados

        mostrarRecetas(recetas);

    } catch (error) {

        console.error("Error al buscar recetas:", error);
        listaRecetas.innerHTML = "<p>Ha ocurrido un error al buscar las recetas. Inténtalo de nuevo.</p>";

    }

});


// 6. PERMITIR BUSCAR PULSANDO ENTER
inputIngrediente.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        botonBuscar.click();
    }

});
