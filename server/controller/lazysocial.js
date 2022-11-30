let express = require('express');
let router = express.Router();
let mongoose = require('mongoose'); // npm i mongoose
// connect with lazysocial model
let Lazysocial = require('../models/lazysocial');
/* CRUD Operation*/

module.exports.displayLazysocial = (req, res, next) => {
    Lazysocial.find((err, Lazysocial) => {
        if (err) {
            return console.error(err);
        }
        else {
            //console.log(lazysocial);
            res.render('lazysocial/catalogue', {
                title: 'Lazysocial view',
                Lazysocial: lazysocial
            })
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('lazySocial/add', { title: 'Add Item' })
}

module.exports.processAddPage = (req, res, next) => {
    let newItem = lazySocial({
        "name": req.body.name,
        "catagory": req.body.catagory,
        "description": req.body.description,
        "stock": req.body.stock,
        "price": req.body.price
    });
    lazySocial.create(newItem, (err, lazySocial) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/lazySocial-catalogue');
        }
    })

}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;
    lazySocial.findById(id, (err, itemToEdit) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.render('lazySocial/edit', { title: 'Edit Item', item: itemToEdit });
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;
    let updateItem = lazySocial({
        "_id": id,
        "name": req.body.name,
        "catagory": req.body.catagory,
        "description": req.body.description,
        "stock": req.body.stock,
        "price": req.body.price
    });
    lazySocial.updateOne({ _id: id }, updateItem, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/lazySocial-catalogue');
        }
    });
}

module.exports.displayDeletePage = (req, res, next) => {
    let id = req.params.id;
    lazySocial.findById(id, (err, itemToEdit) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.render('lazySocial/delete', { title: 'Delete Item', item: itemToEdit });
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;
    lazySocial.deleteOne({ _id: id }, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/lazySocial-catalogue');
        }
    });
}
