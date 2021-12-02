import { PessoaFisica } from './PessoaFisica.js';
import { PessoaJuridica  } from './PessoaJuridica.js';

console.log('---------- Atividade 072 ---------------- \n');

const pf = new PessoaFisica(7577589595895);
pf.nome = "Nathalia";
pf.endereco =  "Gama";

console.log('---------- Pessoa Fisica ----------------');
console.log("Nome: " + pf.nome);
console.log("CPF: " + pf.cpf);
console.log("Endereço: " + pf.endereco);

const pj = new PessoaJuridica(8666868986896969);
pj.nome = "Priscila";
pj.endereco = "Santa Maria";

console.log('\n---------- Pessoa Juridica ----------------');
console.log("Nome: " + pj.nome);
console.log("CNPJ: " + pj.cnpj);
console.log("Endereço: " + pj.endereco + "\n");