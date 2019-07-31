const Sequelize = require('sequelize');

const db = new Sequelize({
    database: 'brag',
    dialect: 'postgres',
    define:{
        underscored: true,
        returning: true
    }
})