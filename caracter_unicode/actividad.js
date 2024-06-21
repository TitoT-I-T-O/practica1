//Ejercicio 1: Crear una expresión regular que coincida con cualquier
//símbolo de moneda.

//let texto = "abc$23";
//let expresion =/\p{S}/gu
//console.log(texto.match(expresion))


//Ejercicio 2: Crear una expresión regular que coincida con cualquier
//carácter de espacio (incluyendo espacios, tabulaciones y saltos de
//línea).

//let texto = "abc123/n  ";
//let expresion =/\p{Z}|\p[\n]/gu
//console.log(texto.match(expresion))

//Ejercicio 3: Crear una expresión regular que coincida con letras
//mayúsculas y minúsculas en scripts latinos y griegos.

//let texto = "abc123fghfghfghbbbbbbb  τὰ Ἑλληνικὰ ɣ  ";
//let expresion =/\p{Lu}|\p{Ll}/gu
//console.log(texto.match(expresion))

//Ejercicio 4: Crear una expresión regular que coincida con cualquier
//letra o número.

let texto = "abc123sdfsdfgsdfsdf  ";
let expresion =/\p{N}|\p{N}/gu
console.log(texto.match(expresion))









