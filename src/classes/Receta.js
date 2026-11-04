export class Receta {
    //constructor que recibe los datos  de una receta

    constructor(datos) {

        this.id = datos.idMeal;
        this.nombre = datos.strMeal;
        this.imagen = datos.strMealThumb;
        this.categoria = datos.strCategory;
        this.origen = datos.strCountry;
        this.instrucciones = datos.strInstructions;

        this.ingredientes = this.obtenerIngredientes(datos);

    }

    //metodo para obtener ingredientes y sus cantidades

    obtenerIngredientes(datos) {

        const listaIngredientes = [];

        for (let i = 1; i <= 20; i++) {

            const ingrediente = datos[`strIngredient${i}`];
            const cantidad = datos[`strMeasure${i}`];

            if (ingrediente && ingrediente.trim() !== "") {

                listaIngredientes.push({
                    nombre: ingrediente,
                    cantidad: cantidad
                });

            }
        }

        return listaIngredientes;
    }
}