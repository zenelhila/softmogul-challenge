const geocode = require('../utils/geocode')
const hotels = require('../models/hotels.model')
const { list } = require('../models/hotels.model')
require('../models/db')

exports.find = (req, res) => {
    if(!req.body) {
        res.status(400).send({
            message: "Can't be empty"
        })
    }

    const address = process.argv[2]

    if(!address) {
        console.log('Please provide an address')
    } else {
        geocode(address, (error, data) => {
            if(error) {
                res.status(500).send({
                    message: "Something went wrong"
                }) 
            }
    
            list(data.latitude, data.longitude, (error, hotelsData) => {
                if(error) {
                    res.status(500).send({
                        message: "Something went wrong"
                    })
                } else {
                    res.send(hotelsData)
                }
            })
        })
    }
}