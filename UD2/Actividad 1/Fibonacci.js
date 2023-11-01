
let i = 0;
let j = 1;
let k = 3;
console.log("SERIE DE FIBONACCI" + "\n");

console.log("El elemento 1 de la serie de Fibonacci es: 0");
console.log("El elemento 2 de la serie de Fibonacci es: 1");

while( k <= 10 ) {
    
    let resultado = i + j;

    console.log("El elemento " + k + " de la serie de Fibonacci es: " + resultado);
    k++;
    i = j;
    j = resultado;
}