const sql = require('./db')

class Book {
    constructor (book) {
        this.name = book.name
        this.hotel = book.hotel
        this.time = book.time
    }
    
    create(result) {
        sql.query('INSERT INTO book (name, hotel, time) VALUES (?, ?, ?)', [this.name, this.hotel, this.time], result)
    }

    findAll(result) {
        sql.query('SELECT * FROM book WHERE name = ?', [this.name], result)
    }
}

// let book = ();
// book.name = Zenel;
// book.hotel = Tirana International Hotel;

// book.save();

// let book = Book.create(name, hotel, time);

// Book.create = (name, hotel, time, result) => {
//     sql.query('INSERT INTO book (name, hotel, time) VALUES (?, ?, ?)' [this.name, this.hotel, this.time], (err, res) => {
//         if(err) {
//             console.log('Error:: ', err)
//             //result(err, null)
//             return
//         }
//         console.log('Created Book')
//     })
// }

Book.findAll = (name, result) => {
    sql.query('SELECT * FROM book WHERE name = ?', name, (err, res) => {
        if(err) {
            console.log('Error: ', err)
            result(err, null)
            return
        }
    })
}

module.exports = Book