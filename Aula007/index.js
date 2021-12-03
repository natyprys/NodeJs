import Conta from './model/Conta.js'
import ContaRepository from './repository/ContaRepository.js'

console.log(" ----------- Banco -------------");

    const conta1 = new Conta();
    conta1.id = 2
    conta1.numero = 12220;
    conta1.agencia = 545454;
    conta1.saldo = 3.9;

    console.log(conta1.numero, conta1.agencia, conta1.saldo);

    //create
    //const result = await ContaTable.create(conta1);  
    
    //update
    //const result = await ContaTable.update(conta1,{
            //where:{id:1}   ou
        //where:{id:conta1.id}
    //});
    
    //deletar
    //const result = await ContaTable.destroy({
        //where:{id:1}
    //});

   // console.log(result);

    //await aguardar retorno ate q conclua
   // const lista = await ContaTable.findAll({raw:true});
    //console.log(lista);


    const repository = new ContaRepository();
    const lista = await repository.findAll();
    console.log(lista);