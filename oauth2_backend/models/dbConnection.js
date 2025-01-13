
const mongoose = require('mongoose');

const DB = process.env.DB_URL;

console.log(typeof DB)
console.log('DB--', DB);
mongoose
    .connect(DB)
    .then(() => {
        console.log('DB connection established');
    })
    .catch((err) => {
        console.log('DB CONNECTION FAILED');
        console.log('ERR: ', err);
    });




// const mongoose = require('mongoose');


// mongoose
//     .connect("mongodb+srv://devvasani100:0h4LeYkD0HXajoWg@cluster0.uv30b.mongodb.net/auth-db?retryWrites=true&w=majority&appName=Cluster0")
//     .then(() => {
//         console.log('DB connection established');
//     })
//     .catch((err) => {
//         console.log('DB CONNECTION FAILED');
//         console.log('ERR: ', err);
//     });