const lista = ["Inex", "Jojo", "Guga"]
const lista2 = new Array("Inex", "Jojo", "Guga");

console.log(lista);
console.log(lista2);

// adicionando elemetos a lista

const lista = ["Inex", "Jojo", "Guga"];
//console.log(lista);
//const lista2 = new Array ["Inex", "Jojo", "Guga"];
//console.log(lista2);

//na lista posso usar o const para adicionar

//para adicionar
lista.push("Chimba");

console.log(lista);

//quantidade de elementos
console.log(lista.length);

//retorna o index da jojo = 1 [0,1,2,3]
console.log("Index da jojo:", lista.indexOf("Jojo"))


//pop- remove o ultimo elemento e retorna ele
const valor = lista.pop();
console.log(valor);
console.log(lista);

//slice- para remover um determido elemento ( inicio , final)
// preciso colocar o slice numa variavel
//faz uma copia (ctrl c)
const novaLista = lista.slice(0,2);
console.log(novaLista);

//splice- (começar a deletar, quantos eu quero deletar a partir dai)
// ele retorna um array com os deletados
//ele remove da lista original (ctrl x)
lista.splice(1,2);
console.log(lista);

// Elemento especifico pelo index
console.log(lista[0]);