//Este programa indicará si un número introducido en primo o no

function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    if (numero <= 3) {
        return true;
    }
    if (numero % 2 === 0 || numero % 3 === 0) {
        return false;
    }
    let i = 5;
    while (i * i <= numero) {
        if (numero % i === 0 || numero % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }
    return true;
}

do {
    const numero = require('prompt-sync')({sigint: true});
numero = parseInt(prompt("Introduce un número entero positivo:"));
    numero = 11;
    if (isNaN(numero) || numero <= 0) {
        console.log("Por favor, introduce un número entero positivo.");
    } else {
        if (esPrimo(numero)) {
            console.log(numero + " es un número primo.");
        } else {
            console.log(numero + " no es un número primo.");
        }
    }
continuar = 'Si';
    //const continuar = prompt("¿Deseas verificar otro número? (Escribe 'si' o 'no'):").toLowerCase();
} while (continuar === 'si');