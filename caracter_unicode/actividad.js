//let texto = "abc$23";
//let expresion =/\p{S}/gu
//console.log(texto.match(expresion))



let texto = "abc123/n  ";
let expresion =/\p{Z}|\p[\n]/gu
console.log(texto.match(expresion))

//let texto = "abc123fghfghfghbbbbbbb  τὰ Ἑλληνικὰ ɣ  ";
//let expresion =/\p{Lu}|\p{Ll}/gu
//console.log(texto.match(expresion))

//let texto = "abc123sdfsdfgsdfsdf  ";
//let expresion =/\p{N}|\p{N}/gu
//console.log(texto.match(expresion))









