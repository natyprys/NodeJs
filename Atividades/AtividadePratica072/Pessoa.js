
export class Pessoa{
    #nome;
    #endereco;

    get nome(){
        return this.#nome;
    }

    set nome(nome){
        this.#nome = nome;
    }

    get endereco(){
        return this.#endereco;
    }

    set endereco(endereco){
       this.#endereco = endereco;
    }


}