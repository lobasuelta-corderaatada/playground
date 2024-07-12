//filtros

let lista = [
    {a : 7, b : 14}, {a : 5, b : 21}, {a : 7, b : 28}
]
//console.log(lista);

function agarraA(a){
    return a.a
}

let arreglo = lista.map((a)=>a.a);
lista.map((a)=>a.b);


//filter
//toma el valor de a y lo devuelve solo si da true la condicion
// let filtrado = arreglo.filter((a)=> a < 6);
// console.log(filtrado);

// let filtrado = lista.filter((a)=> a.b > 20);
// console.log(filtrado);

let numeros = [5, 3, 5, 1, 1, 2]

function seleccionaUnicos(todos){
    let unicos = [];
    todos.forEach(function (n){
        if (unicos.indexOf(n) == -1){
            unicos.push(n)
        }
    })
    return unicos
}

let resultado = seleccionaUnicos(numeros);
console.log(resultado);

//unicos valores de a
//  in: lista de objetos
//  out: lista de valores unicos de la propiedad a


function unicosValoresDeA(todos){
    let unicos = [];
    todos.forEach(function (obj){
        if (unicos.indexOf(obj.a) == -1){
            unicos.push(obj.a)
        }
    })
    return unicos
}

let resultado2 = unicosValoresDeA(lista);
console.log(resultado2);