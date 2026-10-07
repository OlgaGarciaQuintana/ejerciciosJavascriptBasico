//Ejercicio 2. Constantes y calificaciones

const NOTA_MAXIMA = 10;
let nota = 10;
if (nota < 0 || nota > NOTA_MAXIMA) {
    console.log("La nota no es válida");
} else if (nota < 5) {
    console.log("Suspenso");
} else if (nota < 7) {
    console.log("Aprobado");
} else if (nota < 9) {
    console.log("Notable");
} else {
    console.log("Sobresaliente");
}