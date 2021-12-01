// formato import { OQ eu quero importar } from  de onde com a extensão =  "./Conta.js"  ;
//colocar o export na class para dizer q ela vem de outra
// colocar em modulo
//posso colocar no final da pg tbm o export

import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    constructor(saldoInicial){
        super();
        super._saldo = saldoInicial;
        //super.saldo = saldoInicial;
    }
}

// export default ContaCorrente