const { User, Brag, Comment } = require("./models")

const seedData = async () =>{
    try{
        await User.destroy({
            where: {}
        })
    
        //create users
        const user1 = await User.create({
            name: "Nayeli Ayinde",
            username: "naybags23",
            email: "nayay@gfakemail.com",
            password: "123456"
        })
    
        const user2 = await User.create({
            name: "Simba King",
            username: "lionchild",
            email: "ripdaddy@fakemail.com",
            password: "123456"
        })
    
        const user3 = await User.create({
            name: "Zelie Illorin",
            username: "zelieoya",
            email: "orisha@fakemail.com",
            password: "123456"
        })
    
        const user4 = await User.create({
            name: "Sansa Stark",
            username: "queensnow",
            email: "ladywinterfell@fakemail.com",
            password: "123456"
        })
    
        const user5 = await User.create({
            name: "Syenite Rogga",
            username: "corosmomma",
            email: "yumenes@fakemail.com",
            password: "123456"
        })
    
        //create brags
    
        const brag1 = await Brag.create({
            title: "Best makeup in Sephora. Period.",
            business_name: "Beauty Bakerie",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK_kIpxax5vA3Ts2FsDVE1DAkx-9c8-ro9Zcx4q4AUEKt793Qh0w",
            description: "Revealing beauty's sweet side, Beauty Bakerie's cruelty free cosmetics have mouths watering over their incredibly flattering hues. The brand's multi-coloured, super cute aesthetic houses some seriously powerful cosmetics - ultra-pigmented eyeshadows, long-lasting liquid lipsticks and smudge proof brow gels. Shelfie-worthy packaging, high-quality formulas and sweet scents? With Beauty Bakerie, you can have your cake and eat it too…",
            is_green: true,
            url: "https://www.beautybakerie.com/",
            location: "Online Only",
            category: "beauty",
            date: 2019-06-02,
            likes: 780
        })
        
    
        const brag2 = await Brag.create({
            title: "This makeup line is dope!",
            business_name: "The Crayon Case",
            image: "https://di2ponv0v5otw.cloudfront.net/posts/2018/05/02/5ae9e2c56bf5a64d3eff4c40/m_5aec373ccaab4430d912b1e4.jpg",
            description: "he Crayon Case is a cosmetic line dedicated to amateur make-up users, and aspiring make-up artists. Aiming to encourage all people to treat their face as a blank canvas, as they pursue the ultimate creation of their personal masterpiece.",
            is_green: true,
            url: "https://thecrayoncase.com/",
            location: "Online Only",
            category: "beauty",
            date: 2019-06-02,
            likes: 883
        })
    
        const brag3 = await Brag.create({
            title: "Fenty is soooo luxurious",
            business_name: "Fenty Beauty",
            image: "https://images.squarespace-cdn.com/content/v1/553fdbaee4b0d82b91dbde7d/1557752699669-UTH22R351FCZORHPSFIA/ke17ZwdGBToddI8pDm48kBPcBIEwrEhrd9i-too_ByIUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dg9Nn1FRcAOBCOCmDzP-Th08rmc_l8BB1BHohWZSfG2NZtJ3qR9G2BYeA0wOAaeYNg/image-asset.jpeg",
            description: "Inspired by a worldwide community beyond traditional boundaries, FENTY embraces a fundamental freedom: a freedom from convention and rules. 'Women are forces of this earth. We are multifaceted, complex, vulnerable yet bulletproof, and FENTY speaks to all of our intricacies. Some days I want to be submissive, many days I’m completely in charge and most days I feel like being both….so it was imperative that we created a line versatile enough to embrace and celebrate us in that way.' Robyn Rihanna Fenty",
            is_green: true,
            url: "https://www.fenty.com/us/en/home",
            location: "Online Only",
            category: "beauty",
            date: 2019-06-02,
            likes: 431
        })
    
    
        const brag4 = await Brag.create({
            title: "These clothes have so much swag.",
            business_name: "BuriedNKulture",
            image: "https://pbs.twimg.com/profile_images/1050860878650720256/Hht94mks.jpg",
            description: "Each collection with Buried N Kulture is limited edition. Buried N Kulture is an experience created by Jekia Weary depicted by visuals and street fashion. Buried N Kulture is more than the style of clothing but the experience from where all kulture is birthed. Inspired by the hoods across America. No matter where your tree is planted you are Buried N Kulture, always remain #loyal2thesoil.",
            is_green: true,
            url: "https://buriednkulture.com/",
            location: "Online Only",
            category: "clothing",
            date: 2019-6-02,
            likes: 286
        })
    
        const brag5 = await Brag.create({
            title: "Clothes are soooo sweet.",
            business_name: "Sweet Knowledge Clothing",
            image: "https://assets.bigcartel.com/theme_images/22123099/Header_Logo.jpg",
            description: "If you ask any HBCU attendee they will mostly likely tell you choosing their institution was one of the greatest decisions of their lives, because like the old adage says - “The Blacker The College, The Sweeter The Knowledge”. A sweatshirt or a tee could be anything but when you’re rocking SKCC - it is sure to be SWEET. ",
            is_green: true,
            url: "http://www.sweetknowledgeclothing.com/",
            location: "Online Only",
            category: "clothing",
            date: 2019-06-02,
            likes: 532
        })

        brag1.setUser(user1)
        brag2.setUser(user2)
        brag3.setUser(user3)
        brag4.setUser(user4)
        brag5.setUser(user5)
        
    }catch(e){
        console.log('Something went wrong child', e)
    }
   


}

seedData()