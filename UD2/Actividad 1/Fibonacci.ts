//La sucesión de Fibonacci se caracteriza porque el primer número es 0, el segundo es 1 y
// a partir de ahí cada elemento es la suma de los dos anteriores.


var i: number = 0;
var j: number = 1;
var k: number = 3;

console.log("SERIE DE FIBONACCI" + "\n");

console.log("El elemento 1 de la serie de Fibonacci es: 0");
console.log("El elemento 2 de la serie de Fibonacci es: 1");

while (k <= 10) {

    var resultado: number = i + j;

    console.log("El elemento " + k + " de la serie de Fibonacci es: " + resultado);
    k++;
    i = j;
    j = resultado;
}