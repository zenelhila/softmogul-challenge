const express =  require('express')
require('./models/db')

const router = express.Router()
const bodyParser = require('body-parser')
const book = require('../src/controllers/book.controller')
const hotel = require('./controllers/hotels.controller')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

router.get('/', hotel.find)
router.post('/book', book.create)
router.get('/book', book.findAll)
app.use(router)

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT)
})


