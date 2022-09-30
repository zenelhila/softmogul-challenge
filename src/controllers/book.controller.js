const Book = require('../models/book.model')

exports.create = (req, res) => {
    if(!req.body) {
        res.status(400).send({
            message: 'Cannot be sent empty!'
        })
    }

    const book = new Book({
        name: req.body.name,
        hotel: req.body.hotel,
        time: req.body.time,
        // name: "Zenel",
        // hotel: "Enea",
        // time: "20:00"
    })
    console.log(book.name, book.hotel, book.time)
    console.log(book)

    book.create((err, data) => {
        if(err){
            res.status(500).send({
                message: err.message || 'Some error occured!'
            })
        } else {
            res.send(data)
        }
    })
}

exports.findAll = (req, res) => {
    if(!req.body) {
        res.status(400).send({
            message: "Cannot be sent empty!"
        })
    }

    const book = new Book({
        name: req.body.name
    })
    console.log(book.name)
    book.findAll((err, data) => {
        if(err) {
            res.status(500).send({
                message: err.message || 'Some error occured!'
            })
        } else {
            res.send(data)
        }
    })
}