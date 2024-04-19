const express = require('express');
const postsRoutes = require('./routes/posts.js')
const indexRoutes = require('./routes/index.js')

const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(postsRoutes.router)
app.use(indexRoutes.router)

const port = process.env.SERVER_PORT
const host = process.env.SERVER_HOST

app.listen(port, host)

console.log(`Listening on http://${host}:${port}`)