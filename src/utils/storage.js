// Función para guardar datos en localStorage
export function guardarEnLocalStorage(clave, datos) {
    localStorage.setItem(clave, JSON.stringify(datos));
}

// Función para recuperar datos de localStorage
export function obtenerDeLocalStorage(clave) {
    const datos = localStorage.getItem(clave);

    if (datos) {
        return JSON.parse(datos);
    }

    return [];
}