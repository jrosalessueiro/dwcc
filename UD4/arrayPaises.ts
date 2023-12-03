interface PaisArray {
    [index: number]: string;
}

let arrayPaises: PaisArray = [];

function crearArray() {
    let listaPaises = document.getElementById("list");

    // Recorre los elementos de la lista
    for (let i = 0; i < listaPaises.children.length; i++) {
        let elemento = listaPaises.children[i] as HTMLLIElement;
        arrayPaises.push(elemento.innerHTML);
    }
}

function contarElementos() {
    let numero = arrayPaises.length;
    document.getElementById("resultado1").innerText = "El array tiene: " + numero + " elementos.";
}

function mostrarTodos() {
    let contenido = arrayPaises.join(', '); // Concatenar con coma y espacio
    document.getElementById("resultado2").innerText = "Los países contenidos en el array son: " + contenido;
}

function mostrarInverso() {
    // Crear una copia del array y luego invertirlo
    let arrayPaisesInvertido = arrayPaises.slice().reverse();
    let contenido = arrayPaisesInvertido.join(', ');

    document.getElementById("resultado3").innerText = "Los países contenidos en el array de último a primero son: " + contenido;
}

function sumaInicio() {
    // Solicitar al usuario que introduzca un nombre
    let pais = prompt("Introduce el nombre del país que quiere añadir:");

    // Verificar si el usuario ingresó un nombre
    if (pais !== null && pais !== "") {
        // Añadir el nombre al inicio del array
        arrayPaises.unshift(pais);
    } else {
        // Mostrar un mensaje si el usuario no ingresó un nombre
        console.log("No se ingresó un país.");
    }
}

function sumaFin() {
    // Solicitar al usuario que introduzca un nombre
    let pais = prompt("Introduce el nombre del país que quiere añadir:");

    // Verificar si el usuario ingresó un nombre
    if (pais !== null && pais !== "") {
        // Añadir el nombre al inicio del array
        arrayPaises.push(pais);
    } else {
        // Mostrar un mensaje si el usuario no ingresó un nombre
        console.log("No se ingresó un país.");
    }
}

function eliminaInicio() {
    if (arrayPaises.length > 0) {
        let elementoEliminado = arrayPaises.shift();

        // Mostrar el elemento eliminado en el HTML
        document.getElementById("resultado6").innerText = "El país eliminado en la primera posición es: " + elementoEliminado;
    } else {
        // Mostrar un mensaje si el array está vacío
        document.getElementById("resultado6").innerText = "El array está vacío, no se puede eliminar ningún elemento.";
    }
}

function eliminaFin() {
    if (arrayPaises.length > 0) {
        let elementoEliminado = arrayPaises.pop();

        // Mostrar el elemento eliminado en el HTML
        document.getElementById("resultado7").innerText = "El país eliminado en la primera posición es: " + elementoEliminado;
    } else {
        // Mostrar un mensaje si el array está vacío
        document.getElementById("resultado7").innerText = "El array está vacío, no se puede eliminar ningún elemento.";
    }
}

function encuentraPais() {
    // Solicitar al usuario que introduzca una posición
    let posicion = prompt("Introduce la posición que ocupa el país que desea mostrar:");
    let posicionReal = posicion - 1;
    document.getElementById("resultado8").innerText = "El país seleccionado en la posición " + posicion + " es: " + arrayPaises[posicionReal];
}

function encuentraPosicion() {
    // Solicitar al usuario que introduzca un país
    let pais = prompt("Introduce el país del que desea conocer su posición:");
    let posicion = 0;

    // Verificar si el usuario ingresó un país
    if (pais !== null && pais !== "") {
        if (arrayPaises.includes(pais)) {
            posicion = arrayPaises.indexOf(pais) + 1;
            document.getElementById("resultado9").innerText = "La posición que ocupa " + pais + " es: " + posicion;
        } else {
            // Mostrar un mensaje si el país no se encuentra en el array
            console.log("No se encuentra ese país en el array.");
        }
    } else {
        // Mostrar un mensaje si el usuario no ingresó un país
        console.log("No se ingresó un país.");
    }
}

function entrePosiciones() {
    let numero = arrayPaises.length;
    let paisResultado = [];

    // Solicitar al usuario que introduzca las dos posiciones
    let posicion1 = prompt("Introduce la primera posición:");
    let posicion2 = prompt("Introduce la segunda posición:");

    for (let j = posicion1 - 1; j <= posicion2 - 1; j++) {
        paisResultado.push(arrayPaises[j]);
        let contenido = paisResultado.join(', '); // Concatenar con coma y espacio
        document.getElementById("resultado10").innerText = "Los países contenidos entre las posiciones " + posicion1 + " y " + posicion2 + " son: " + contenido
    }
}