const { User, Brag, Comment } = require('./models')

const seedData = async () =>{
    await User.destroy({
        where: {}
    })

    //create users
    const user1 = User.create({
        name: 'Nayeli Ayinde',
        username: 'naybags23',
        email: 'nayay@gfakemail.com',
        password: '123456'
    })

    const user2 = User.create({
        name: 'Simba King',
        username: 'lionchild',
        email: 'ripdaddy@fakemail.com',
        password: '123456'
    })

    const user3 = User.create({
        name: 'Zelie Illorin',
        username: 'zelieoya',
        email: 'orisha@fakemail.com',
        password: '123456'
    })

    const user4 = User.create({
        name: 'Sansa Stark',
        username: 'queensnow',
        email: 'ladywinterfell@fakemail.com',
        password: '123456'
    })

    const user5 = User.create({
        name: 'Syenite Rogga',
        username: 'corosmomma',
        email: 'yumenes@fakemail.com',
        password: '123456'
    })


  



}

seedData()