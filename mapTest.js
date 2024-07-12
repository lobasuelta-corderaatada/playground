//objeto

let objeto = {
  a: 1,
  b: 2,
};

//lista de objetos

let lista = [
  { a: 1, b: 2 },
  { a: 2, b: 4 },
  { a: 6, b: 4 },
];

//map

//map manual
function myMap(laLista, laFuncion) {
  let arreglo = [];
  for (let i = 0; i < laLista.length; i++) {
    let r = laFuncion(laLista[i]);
    arreglo.push(r);
  }
  return arreglo;
}

function imprimeObjeto(a) {
  console.log("me llegó" + JSON.stringify(a));
  return 0
}

//funcion que de la lista devuelva la propiedad b
function devuelveBe(a) {
  return a.b;
}

console.log("voy a lista.map");

// let resultado = lista.map(devuelveBe);
// console.log(resultado);

let r = myMap(lista, imprimeObjeto);
console.log(r);
console.log("terminé lista.map");


