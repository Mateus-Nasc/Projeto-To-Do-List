
import DataTypes from "sequelize"//tipos de dados do Sequelize, permitindo definir os atributos do modelo.
import conn from "../db/conn.js"//conexão com o banco de dados


//Cria o modelo Task, que representa uma tabela no banco de dados.
const Task = conn.define('Task', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    done: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
})

export default Task


// obs: required: true, não é uma opção válida do Sequelize para definir obrigatoriedade.
// O correto é utilizar => allowNull: false, para garantir que os campos não fiquem vazios.