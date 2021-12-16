export class Cliente{
    private _id: number;
    private _nome: string;

    //string sempre minusculo no JS
    constructor(id:number, nome:string){
        this._id = id;
        this._nome = nome;
    }
}