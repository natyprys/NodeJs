class ContaCorrente{
    numero;
    saldo;
    agencia;
    cliente;
}

const conta1 = new ContaCorrente();
conta1.numero = '152165';
conta1.saldo = 531.12;
conta1.agencia = '0025-8';
conta1.cliente = 'Maykon';

//opçoes para console
console.log(conta1);
//cada elemento
console.log(conta1.numero);