
// Ingredientes que tenemos en casa
const ingredientes = ["Tomate", "Huevo", "Patata"];

const inputIngrediente = document.getElementById("ingrediente");
const botonAgregar = document.getElementById("btn-agregar");
const listaIngredientes = document.getElementById("lista-ingredientes");

// Función para mostrar los elementos
function mostrarIngresdientes() {

    listaIngredientes.innerHTML = "";

    ingredientes.forEach(function(ingrediente) {

        const elementoLista = document.createElement("li");

        elementoLista.textContent = ingrediente;

        // Crear botón eliminar
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";

        // Evento para eliminar el ingrediente
        botonEliminar.addEventListener("click", function() {

            const posicion = ingredientes.indexOf(ingrediente);

            ingredientes.splice(posicion, 1);

            mostrarIngresdientes();

        });

        // Añadir el botón eliminar
        elementoLista.appendChild(botonEliminar);

        listaIngredientes.appendChild(elementoLista);
    });
}

// Mostrar ingredientes al cargar la página
mostrarIngresdientes();

// Evento del botón Añadir
botonAgregar.addEventListener("click", function(){

    const nuevoIngrediente = inputIngrediente.value.trim();

    if (nuevoIngrediente === "") {
        alert("Escribe un ingrediente");
        return;
    }

    if (ingredientes.includes(nuevoIngrediente)) {
        alert("Este ingrediente ya está añadido");
        return;
    }

    ingredientes.push(nuevoIngrediente);

    mostrarIngresdientes();

    inputIngrediente.value = "";
});