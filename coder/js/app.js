console.log("hola")

var nombre = "Iron man";
consoloe.log(nombre);
var edad = 20;
console.log(edad);

var edad2 = "32";
console.log(edad2);

var dia = prompt ("ingrese un dia de la semana");
var texto = dia + " es un lindo para programar"
console.log(texto)

var perro = "Boxer";
console.log(typeof perro);

var numero = prompt ("ingrese un numero")
console.log(typeof numero);
numero = parseInt (numero);
console.log(typeof numeroparse);
var suma = numeroparse + 10;

numero += 10;

console.log(suma);

var proposicion = true;
var proposicion2 = false;
console.log(typeof proposicion);

// && //esto es la conjuncion y
// || //esto es la conjuncion o
// ! // esto es el no

var condicion= false ;

if (cond) {
  console.log("la proposicion es verdadera");
}
else {
  console.log("la proposicion es falsa");
}

var edad = prompt ("Cuantos años tiene?");
edad = parseInt (edad);
if (edad < 16) {
  console.log("Usted no puede votar");
}
else {
  console.log("Usted puede votar");
};

var num = prompt ("Ingrese un numero");
var num2 = prompt ("Ingrese un numero");
console.log(parseInt(num) + parseInt(num2));


// Funciones
var numero = parseInt(prompt ("Ingrese un numero"));

function sumar10 (num) {
  num += 10;
  console.log(num);
}

sumar10 (20); //parametro

console.log("hola".length);

function contar (palabra){
  console.log(palabra.length);
};
var palabra = prompt ("ingrese una palabra")
contar ("hola");

scope;

"use strict"; //no permite variables globales

var numero1 = parseInt (prompt("ingrese un numero"));
var numero2 = parseInt (prompt("ingrese un numero"));

function  sumarnumeros (num1 , num2){
  var suma = num1 + num2;
  console.log(suma);
}

sumarnumeros(numero1, numero2)
