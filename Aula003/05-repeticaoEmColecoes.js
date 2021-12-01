lista = new Array(0,5,8,9,48);

//para percorrer a lista
for(let cont=0; cont < lista.length; cont++){
    console.log(lista[cont]);
}

//Elemento especifico pelo index
//console.log(lista[0]);

// - Não funciona:
//lista.forEach(function listar(elemento){
    //console.log(elemento)
//});


console.log("ForEach com arrow function")

lista.forEach(elemento=>console.log(elemento));