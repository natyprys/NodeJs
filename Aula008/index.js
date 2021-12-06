import Express from 'express';
import bodyParser from 'body-parser';
import ContaApi from './api/ContaApi.js';
import ContaRepository from './repository/ContaRepository.js';


console.log(" ----------- Banco -------------");

//função para rodar a aplicação
const api = Express();

//funções do express
api.use(bodyParser.json());
// converte o corpo das requisições para json

api.listen(3000, ()=>console.log('Rodando....'));
// a api vai escutar na porta 3000

api.use('/api/conta', ContaApi);
    
//api.use('/', async(req, resp)=>{
        //const lista = await repository.findAll();
        //resp.send(lista);
    //}
    //);
// mapear rotas