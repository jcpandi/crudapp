const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/crudDB');

mongoose.connection.on('connected', () =>{
    console.log('Yes, Connected to MongoDB...');
});

mongoose.connection.on('error', (err) => {
    console.log('err');
});
module.exports = mongoose;