// formato import { OQ eu quero importar } from  de onde com a extensão =  "./Conta.js"  ;
//colocar o export na class para dizer q ela vem de outra
// colocar em modulo
//posso colocar no final da pg tbm o export

import { Conta } from "./Conta";

export class ContaCorrente extends Conta{
    //criando um construtor
    constructor(saldoInicial:number){
        super();
        super._saldo = saldoInicial;
        //super.saldo = saldoInicial;
    }
}

// export default ContaCorrente