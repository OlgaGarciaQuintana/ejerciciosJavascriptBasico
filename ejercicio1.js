//Ejercicio 1. Ámbito de var y let

for (var i = 0; i < 3; i++) {
  var mensaje = "Vuelta " + i;
}
console.log("i vale:", i);
console.log("mensaje:", mensaje);
for (let j = 0; j < 3; j++) {
  let texto = "Vuelta " + j;
}
console.log("j vale:", j);