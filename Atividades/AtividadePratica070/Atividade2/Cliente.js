
class Cliente{
    nome;
    sobrenome;
    idade;
    endereco;
    cpf;
    rg;
    formaDePagamento;
}

const cliente1 = new Cliente();
    cliente1.nome = "Nathalia";
    cliente1.sobrenome = "Priscila";
    cliente1.idade = 25;
    cliente1.endereco = "Brasília-DF";
    cliente1.cpf = "8486489428942";
    cliente1.rg = "3276386238";
    cliente1.formaDePagamento = "Debito";

console.log(cliente1);    