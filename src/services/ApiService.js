export async function buscarRecetas(ingrediente) {
    const respuesta = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingrediente}`
    );

    const datos = await respuesta.json();

    return datos.meals;
}