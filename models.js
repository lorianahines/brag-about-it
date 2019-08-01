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


const Brag = db.define('brag', {
    title: Sequelize.STRING,
    image: Sequelize.STRING,
    description: Sequelize.TEXT,
    is_green: Sequelize.BOOLEAN,
    url: Sequelize.TEXT,
    location: Sequelize.STRING,
    category: Sequelize.TEXT,
    date: Sequelize.TIME,
    likes: Sequelize.INTEGER
})

module.exports = {
    db,
    User,
    Brag
}