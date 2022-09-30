module.exports = app => {
    const book = require('../controllers/book.controller')
    const express = require('express')
    const router = new express.Router()
    const bodyParser = require('body-parser')
    const jsonParser = bodyParser.json()
    router.post('/book', jsonParser, book.create)
    router.get('/book', book.findAll)
    app.use(router)
}