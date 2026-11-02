// Ingredientes que tenemos en casa
const ingredientes = ["Tomate", "Huevo", "Patata"];

const inputIngrediente = document.getElementById("ingrediente");
const botonAgregar = document.getElementById("btn-agregar");
const listaIngredientes = document.getElementById("lista-ingredientes");

botonAgregar.addEventListener("click", function(){
    const nuevoIngrediente = inputIngrediente.value;
    ingredientes.push(nuevoIngrediente);
    console.log(nuevoIngrediente);

});

