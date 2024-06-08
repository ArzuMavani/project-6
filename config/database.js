const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://bhargavdankhara17:Bhar19Dan4555@cluster0.c1g0srj.mongodb.net/movies");

const db = mongoose.connection;

db.on('connected', (err) => {
    if(!err) {
        console.log(' connecting to database');
    }
})