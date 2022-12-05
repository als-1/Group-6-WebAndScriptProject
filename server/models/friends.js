let mongoose = require('mongoose');

let friendsModel = mongoose.Schema({
    name: String,
    userName: String,
    description: String,
    phone: Number,
    email: String
    },
    {
        collection: "friends"
    }
);
module.exports = mongoose.model('friends', friendsModel);