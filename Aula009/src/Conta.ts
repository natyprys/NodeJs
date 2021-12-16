export class Conta{
    private _agencia:string; //privado to ts
    private _numero:string;
    protected _saldo:number; //protect
    private _cliente:string;
    
    //sempre usar em minusculo para ser primitivo

    get agencia(){
        return this.agencia;
    }
    
    set agencia(ag){
        console.log('Acessando o metodo como se fosse uma variavel');
        this.agencia = ag;
    }

    set numero(numero:string){
        this._numero;
    }
    get numero():string{
        return this._numero;
    }

    set cliente(cliente:string){
        this._cliente;
    }
    get cliente():string{
        return this._cliente;
    }

    get saldo():number{
        return this._saldo;
    }

    depositar(valor:number):void{
        this._saldo += valor;
    }

    sacar(valor:number):string{
        if(this._saldo > valor){
            this._saldo -=valor;
            return 'saque executado';
        }
        return 'saldo insuficiente';
    }
}      