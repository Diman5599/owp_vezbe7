const postsSvc = require('../services/posts.js')

const getAllKdPosts = (req, res) => {
    postsSvc.getKdPosts().then(
        (posts) => { 
            res.render('pages/kadeti', {myTitle: "ВА | Кадети", myPosts: posts})
        }
    )
}

const getAllStPosts = (req, res) => {
    postsSvc.getStPosts().then(
        (posts) => { 
            res.render('pages/staresine', {myTitle: "ВА | Старешине", myPosts: posts})
        }
    )
}

module.exports = {
    getAllKdPosts: getAllKdPosts,
    getAllStPosts: getAllStPosts
}