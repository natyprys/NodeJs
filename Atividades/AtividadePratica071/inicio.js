import { Produto } from './Produto.js';
import { Categoria } from './Categoria.js';

console.log('---------- Atividade 071 ----------------')


const produto = new Produto();
    produto.nome = " Batedeira ";
    produto.descricao = "Eletrodomestico ";
    produto.preco = 250.00;    

const categoria = new Categoria();
    categoria.nome = " Cozinha ";
    categoria.departamento = " Casa ";

console.log (produto);
console.log (categoria);    