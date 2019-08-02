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
    business_name: Sequelize.STRING,
    image: Sequelize.TEXT,
    description: Sequelize.TEXT,
    is_green: Sequelize.BOOLEAN,
    url: Sequelize.TEXT,
    location: Sequelize.STRING,
    category: Sequelize.TEXT,
    date: Sequelize.TIME,
    likes: Sequelize.INTEGER
})

const Comment  = db.define('comment', {
    date: Sequelize.TIME,
    content: Sequelize.TEXT,
    likes: Sequelize.INTEGER
})



//establish relationships
User.hasMany(Comment, { onDelete: 'cascade'})
Comment.belongsTo(User)

User.hasMany(Brag, {onDelete: 'cascade'})
Brag.belongsTo(User)

Brag.hasMany(Comment, {onDelete: 'cascade'})
Comment.belongsTo(Brag)


module.exports = {
    db,
    User,
    Brag,
    Comment
}