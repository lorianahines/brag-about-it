const { db } = require('./models')

const resetdb = async () => {
    try{
			await db.sync({force: true})
			process.exit()
    }catch(err){
			console.log({msg: 'something went wrong girl', err})
		}
}

resetdb()