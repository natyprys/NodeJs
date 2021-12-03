import Database from "./Database.js";
import ContaTable from "./ContaTable.js";

Database
    .sync()
    .then( ()=> console.log('Sincronizado o Database')) //se deu certo
    .catch( ()=> console.log( 'Deu erro'));   //se deu errado