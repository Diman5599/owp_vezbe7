const postsSvc = require('../services/posts.js')

const getAllKdPosts = (req, res) => {
    postsSvc.getKdPosts(req.query.term).then(
        (posts) => { 
            res.render('pages/kadeti', {myTitle: "ВА | Кадети", myPosts: posts, term: req.query.term})
        }
    )
}

const getAllStPosts = (req, res) => {
    postsSvc.getStPosts(req.query.term).then(
        (posts) => { 
            res.render('pages/staresine', {myTitle: "ВА | Старешине", myPosts: posts, term: req.query.term})
        }
    )
}

module.exports = {
    getAllKdPosts: getAllKdPosts,
    getAllStPosts: getAllStPosts
}