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
	email: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true,
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
	user_id: {
		type: Sequelize.INTEGER,
		allowNull: false,
		references: {
			model: User,
			key: 'id'
		}
	}
})

const Comment  = db.define('comment', {
	date: Sequelize.TIME,
	content: Sequelize.TEXT,
	likes: Sequelize.INTEGER,
	user_id: {
		type: Sequelize.INTEGER,
		allowNull: false,
		references: {
			model: User,
			key: 'id'
		}
	},
	brag_id: {
		type: Sequelize.INTEGER,
		allowNull: false,
		references: {
			model: Brag,
			key: 'id'
		}
	}
})



module.exports = {
	db,
	User,
	Brag,
	Comment
}