//Ejercicio 3. Días de la semana con switch

var dia = 7;

switch (dia) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Es un día laborable");
        break;
    case 6:
    case 7:
        console.log("Es fin de semana");
        break;
    default:
        console.log("Día incorrecto");
}