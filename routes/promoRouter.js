const express = require('express')
const bodyParser = require('body-parser')
const Promotions = require('../models/promotions')

const promoRouter = express.Router()
promoRouter.use(bodyParser.json())


promoRouter.route('/')

.get((req, res, next) => {

    Promotions.find({})
        .then((promos) => {
            res.statusCode = 200
            res.setHeader('Content-Type', 'application/json')
            res.json(promos)
        }, (err) => next(err))
        .catch((err) => console.log(err))
})

.put((req, res, next) => {
    res.statusCode = 403

    res.end(`PUT operation is not supported on /promotions`)
})

.post((req, res, next) => {

    Promotions.create(req.body)
        .then((promo) => {
            res.statusCode = 200
            res.setHeader('Content-Type', 'application/json')
            res.json(promo)
        }, (err) => next(err))
        .catch((err) => console.log(err))


})

.delete((req, res, next) => {
    Promotions.remove({})
        .then((resp) => {
            res.statusCode = 200
            res.setHeader('Content-Type', 'application/json')
            res.json(resp)
        }, (err) => next(err))
        .catch((err) => console.log(err))
})



promoRouter.route('/:promoId')

.get((req, res, next) => {

    Promotions.findById(req.params.promoId)
        .then((promo) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json')
            res.json(promo)
        }, (err) => next(err))
        .catch((err) => console.log(err))

})

.put((req, res, next) => {

    Promotions.findByIdAndUpdate(req.params.promoId, {
            $set: req.body
        }, { new: true })
        .then((promo) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json')
            res.json(promo)
        }, (err) => next(err))
        .catch((err) => console.log(err))
})

.post((req, res, next) => {
    res.statusCode = 403

    res.end(`POST operation not supported on /promotions/:promoId (${req.params.promoId})`)
})

.delete((req, res, next) => {

    Promotions.findByIdAndDelete(req.params.promoId)
        .then((resp) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json')
            res.json(resp)
        }, (err) => next(err))
        .catch((err) => console.log(err))

})

module.exports = promoRouter