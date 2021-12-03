import Sequelize from 'sequelize';

//conexão com o banco de dados
const Database = new Sequelize(
    'postgres',   //database
    'postgres',   //user
    '123456',     //senha
    {
        host: 'localhost', //endereco do server
        port: 5432, //porta do postgres
        dialect: 'postgres'
    }

);
export default Database;