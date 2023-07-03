const { DataTypes } = require('sequelize');
const connection = require('../database/database.js');

const categorias = connection.define('paciente', {
    cod_paciente: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome_paciente: {
        type: DataTypes.STRING(500),
        allowNull: false
    },
    telefone_paciente: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    celular_paciente: {
        type: DataTypes.STRING(11),
        allowNull: false
    },
    email_paciente: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    foto_paciente: {
        type: DataTypes.STRING(500),
        allowNull: false
    },
    nome_responsavel: {
        type: DataTypes.STRING(500),
        allowNull: true
    },
    telefone_responsavel: {
        type: DataTypes.STRING(10),
        allowNull: true
    },
});
categorias.sync({ force: false });
module.exports = categorias