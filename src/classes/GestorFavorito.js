// Importamos las funciones para trabajar con localStorage
import {
    guardarEnLocalStorage,
    obtenerDeLocalStorage
} from "../utils/storage.js";

// CLASE GESTOR DE FAVORITOS
export class GestorFavoritos {

    constructor() {
        this.clave = "tumenu_favoritos";
        this.favoritos = obtenerDeLocalStorage(this.clave);
    }

    // Añadir una receta a favoritos
    agregarFavorito(receta) {

        const existe = this.favoritos.some(function(favorito) {
            return favorito.id === receta.id;
        });

        if (!existe) {
            this.favoritos.push(receta);
            guardarEnLocalStorage(this.clave, this.favoritos);
        }
    }

    // Obtener todos los favoritos
    obtenerFavoritos() {
        return this.favoritos;
    }

    // Eliminar una receta de favoritos
    eliminarFavorito(id) {

        this.favoritos = this.favoritos.filter(function(favorito) {
            return favorito.id !== id;
        });

        guardarEnLocalStorage(this.clave, this.favoritos);
    }

    // Comprobar si una receta ya está guardada
    esFavorito(id) {
        return this.favoritos.some(function(favorito) {
            return favorito.id === id;
        });
    }

}