const Sequelize = require('sequelize');


const db = new Sequelize({
    database: 'brag',
    dialect: 'postgres',
    define:{
        underscored: true,
        returning: true
    }
})

//define models

const User = db.define('user', {
    name: Sequelize.STRING,
    username: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING
})


