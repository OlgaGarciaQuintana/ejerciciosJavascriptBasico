//Ejercicio 4. Suma acumulada con while

let suma = 0;
let numerosSumados = 0;

while (suma <= 100) {
    numerosSumados++;
    suma += numerosSumados;
}

console.log("Se han sumado " + numerosSumados + " números. Suma total: " + suma);