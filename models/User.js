
import DataTypes from "sequelize"//tipos de dados do Sequelize, permitindo definir os atributos do modelo.
import conn from "../db/conn.js"//conexão com o banco de dados


const User = conn.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  senha_hash: {
    type: DataTypes.STRING,
    allowNull: false
  },
});

export default User;