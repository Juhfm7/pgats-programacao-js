/*
Crie uma função que pega uma lista de inteiros e strings e retorna uma nova lista sem as strings.
*/
function removeStrings(lista) {
    return lista.filter(item => Number.isInteger(item));
}
 
const listaOriginal = [1, "garrafa", 2, "lepe", 3, 4, "dudu", 5, "celular", 6];
const listaFiltrada = removeStrings(listaOriginal);
console.log(listaFiltrada);
