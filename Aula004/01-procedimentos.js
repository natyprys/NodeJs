function imprimirNome(){
    console.log("Nome qualquer");
}

//com um parametro, se eu não passar um nome dá um indefined
function imprimirNomeEspecifico(nome){
    console.log("Nome: "+ nome);
}

//com interpolacao
function imprimirNomeEspecificoComInterpolacao(nome){
    console.log(`Nome: ${nome}`);
}

//interpolacao com sobrenome
function imprimirNomeSobrenome(nome, sobrenome){
    console.log(`Nome:${nome} \nSobrenome:${sobrenome}`);
}

//tem q chamar a funcao
imprimirNome();
imprimirNomeEspecifico('Inex');
imprimirNomeEspecificoComInterpolacao('Jojo');
imprimirNomeSobrenome('Inex', 'Brazil');