const db = require('../models/db')
const request = require('request')

const Hotel = (hotel) => {
    this.name = hotel.name
    this.address = hotel.address
    this.phone = hotel.phone
}

Hotel.insert = (name, address, phone) => {
    db.query('INSERT INTO hotels (name, address, phone) VALUES (?, ?, ?)', [name, address, phone],  (error, result) => {
        if(error) {
            console.log('Error')
        } else {
            console.log('Success')
        }       
    })
}

Hotel.list = (latitude, longitude, callback) => {
    const url = 'https://discover.search.hereapi.com/v1/discover?at=' + latitude + ',' + longitude + '&q=hotels&apiKey=kjeoAEkgOA-wDJ8dvqUwT5eSWepEH98t997bWzrznmc&limit=4'

    request({url: url, json: true}, (error, response) => {
        if(error){
            callback('Unable to connect to hotel services!', undefined)
        } else if(response.body.status === 400) {
            callback('Unable to find location!', undefined)
        } else {
            callback(undefined, response.body.items.forEach(callHotel))
        }
        console.log(url)
    })
}
function callHotel(items){
    console.log('Name: ' + items.title + '\n' + 'Address: ' + items.address.label + '\nPhone #: ' + items.contacts[0].phone[0].value + '\n')
    //hotel.insert(items.title,items.address.label,items.contacts[0].phone[0].value)
}

module.exports = Hotel
