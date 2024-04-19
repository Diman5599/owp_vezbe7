const { PrismaClient } = require('@prisma/client')
const rand = require('../rand.js')


const prismaClient = new PrismaClient()

const initDB = async () => {

    await prismaClient.post.deleteMany()

    const postCount = await ( prismaClient.post.findMany())
    console.log("POST COUNT: " + postCount.length)

    const kdPostCount = await prismaClient.post.createMany({data:
        [
            {type: 2, title: "Хуманитарна акција - Осми март", content: "Позивамо вас да се придружите нашој хуманитарној акцији скупљања новца поводом Међународног дана Жена, који се обележава 8. марта. Овај дан је прилика да показујемо солидарност и подршку женама широм света, као и да се заједно ангажујемо у борби зa родну равноправност и права жена. Новац прикупљен овом акцијом"},
            {type: 2, title: rand.getRandString(10), content: rand.getRandString(200)},
            {type: 2, title: rand.getRandString(10), content: rand.getRandString(200)},
            {type: 2, title: rand.getRandString(10), content: rand.getRandString(200)},
            {type: 2, title: rand.getRandString(10), content: rand.getRandString(200)},
            {type: 2, title: rand.getRandString(10), content: rand.getRandString(200)},
            {type: 2, title: rand.getRandString(10), content: rand.getRandString(200)},
            {type: 2, title: rand.getRandString(10), content: rand.getRandString(200)},
            {type: 2, title: rand.getRandString(10), content: rand.getRandString(200)},
            {type: 2, title: rand.getRandString(10), content: rand.getRandString(200)},
            {type: 2, title: rand.getRandString(10), content: rand.getRandString(200)},
            {type: 2, title: rand.getRandString(10), content: rand.getRandString(200)}
        ]
    })

    
    const stPostCount = await prismaClient.post.createMany({data:
        [
            {type: 1, title: rand.getRandString(10), content: rand.getRandString(200)},
            {type: 1, title: rand.getRandString(10), content: rand.getRandString(200)},
            {type: 1, title: rand.getRandString(10), content: rand.getRandString(200)},
            {type: 1, title: rand.getRandString(10), content: rand.getRandString(200)},
            {type: 1, title: rand.getRandString(10), content: rand.getRandString(200)},
            {type: 1, title: rand.getRandString(10), content: rand.getRandString(200)},
            {type: 1, title: rand.getRandString(10), content: rand.getRandString(200)},
            {type: 1, title: rand.getRandString(10), content: rand.getRandString(200)},
            {type: 1, title: rand.getRandString(10), content: rand.getRandString(200)},
            {type: 1, title: rand.getRandString(10), content: rand.getRandString(200)},
            {type: 1, title: rand.getRandString(10), content: rand.getRandString(200)},
            {type: 1, title: rand.getRandString(10), content: rand.getRandString(200)},
            {type: 1, title: rand.getRandString(10), content: rand.getRandString(200)},
            {type: 1, title: rand.getRandString(10), content: rand.getRandString(200)},
            {type: 1, title: rand.getRandString(10), content: rand.getRandString(200)},
            {type: 1, title: rand.getRandString(10), content: rand.getRandString(200)},
            {type: 1, title: rand.getRandString(10), content: rand.getRandString(200)},
            {type: 2, title: rand.getRandString(10), content: rand.getRandString(200)},
            {type: 2, title: rand.getRandString(10), content: rand.getRandString(200)},
            {type: 2, title: rand.getRandString(10), content: rand.getRandString(200)}
        ]
    })

    console.log(kdPostCount + "\n===============================================================\n" + stPostCount)
}

const checkDB = async () => {
    const kdPosts = await prismaClient.post.findMany({where: {type: 2}})
    
    const stPosts = await prismaClient.post.findMany({where: {type: 1}})
    console.log("===================!!!!!===================")
    console.log(stPosts)
    console.log("=====================================================")
    console.log(kdPosts)
}

initDB().then(() => checkDB())