const express = require('express')
const bodyParser = require('body-parser')


const promoRouter = express.Router()
promoRouter.use(bodyParser.json())


promoRouter.route('/')

.all((req, res, next) => {
    res.statusCode = 200
    res.header('Content-Type', 'text/plain')
    next()

    console.log(`Promotions request sent.`)
})

.get((req, res, next) => {
    res.end(`Send all the running promotions.`)
})

.put((req, res, next) => {
    res.statusCode = 403

    res.end(`PUT operation is not supported on /promotions`)
})

.post((req, res, next) => {
    res.end(`Will add the promos: ${req.body.name}, with details: ${req.body.desc}.`)
})

.delete((req, res, next) => {
    res.end(`Deleting all promotions.`)
})



promoRouter.route('/:promoId')

.all((req, res, next) => {
    res.statusCode = 200
    res.header('Content-Type', 'text/plain')
    next()

    console.log(`Request sent to /promotions/:promoId`)
})

.get((req, res, next) => {
    res.end(`Will send details of the promotion with id: ${req.params.promoId}`)
})

.put((req, res, next) => {
    res.write(`Updating the promotion: ${req.params.promoId}\n`)

    res.end(`Will add the promotions: ${req.body.name}, with details: ${req.body.desc}.`)
})

.post((req, res, next) => {
    res.statusCode = 403

    res.end(`POST operation not supported on /promotions/:promoId (${req.params.promoId})`)
})

.delete((req, res, next) => {
    res.end('Deleting promotion with id: ' + req.params.promoId)
})

module.exports = promoRouter