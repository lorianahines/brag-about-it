const Sequelize = require('sequelize');
const bcrypt = require('bcrypt')
require('dotenv').config()
const SALT_ROUNDS = process.env.SALT_ROUNDS

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
	email: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: {
			args: true,
			msg: 'Enter a unique email, please'
		},
		validate: {
			isEmail: true
		}
	},
	password: {
		type: Sequelize.STRING,
		allowNull: false
	} 
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
	likes: Sequelize.INTEGER,
})

const Comment  = db.define('comment', {
	date: Sequelize.TIME,
	content: Sequelize.TEXT,
	likes: Sequelize.INTEGER,
})

User.hasMany(Brag)
User.hasMany(Comment)
Brag.hasMany(Comment)
Brag.belongsTo(User)
Comment.belongsTo(Brag)
Comment.belongsTo(User)


//hash user password before storing in database
User.beforeCreate(async (user, options) =>{
	const hashPassword = await bcrypt.hash(user.password, Number(SALT_ROUNDS)) //takes in user's password and the number of salt rounds
	user.password = hashPassword
})

module.exports = {
	db,
	User,
	Brag,
	Comment
}