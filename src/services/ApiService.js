//Función para buscar recetas por ingredientes
export async function buscarRecetas(ingrediente) {
    const respuesta = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingrediente}`
    );

    const datos = await respuesta.json();

    return datos.meals;
}


// Función para obtener los detalles de una receta
export async function buscarDetalleReceta(id) {

    const respuesta = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );

    const datos = await respuesta.json();

    return datos.meals[0];
}