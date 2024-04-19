const getPostsWhereDao = require('../dao/posts_get_where.js')

const getKdPosts = async () => {
    return getPostsWhereDao.getPostsWhere({where: {type: 2}})
}

const getStPosts = async () => {
    return getPostsWhereDao.getPostsWhere({where: {type: 1}})
}

module.exports = {
    getKdPosts: getKdPosts,
    getStPosts: getStPosts
}