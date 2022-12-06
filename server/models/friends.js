let mongoose = require('mongoose');

let friendsModel = mongoose.Schema({
    name: String,
    userName: String,
    description: String,
    email: String,
    phone: Number    
    },
    {
        collection: "friends"
    }
);
module.exports = mongoose.model('friends', friendsModel);