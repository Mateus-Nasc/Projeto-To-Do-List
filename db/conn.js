
//Importa a biblioteca Sequelize, que permite trabalhar com bancos de dados SQL usando Js.
import sequelize, { Sequelize } from 'sequelize'

//nodemvc2: Nome do banco de dados.
// root: Usuário do banco de dados.
// '' (vazio): Senha do banco de dados. Se houver senha, deve ser incluída aqui.
// host: 'localhost': O banco de dados está rodando localmente.
// dialect: 'mysql': Especifica que o banco de dados utilizado é MySQL.
const sequelize3 = new Sequelize('nodemvc2', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',

})

try {
        //tentativa de conexao
        //sequelize3.authenticate(): Tenta autenticar a conexão com o banco de dados.
        sequelize3.authenticate()
        console.log('sucesso conectamos com Mysql')
    
    } catch (error) {
        console.log('Não foi possivel conectar: ', error)
        
    }


export default sequelize3