const express = require('express')
const postsCtrl = require('../controllers/posts.js')

const router = new express.Router()

router.get('/kadeti', postsCtrl.getAllKdPosts)

router.get('/staresine', postsCtrl.getAllStPosts)

module.exports = {
    router: router
}