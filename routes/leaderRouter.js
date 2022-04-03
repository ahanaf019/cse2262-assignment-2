const express = require('express')
const bodyParser = require('body-parser')


const leaderRouter = express.Router()
leaderRouter.use(bodyParser.json())


leaderRouter.route('/')

.all((req, res, next) => {
    res.statusCode = 200
    res.header('Content-Type', 'text/plain')
    next()
    console.log(`Leaders request sent.`)
})

.get((req, res, next) => {
    res.end(`Send the list of all leaders.`)
})

.put((req, res, next) => {
    res.statusCode = 403
    res.end(`PUT operation is not supported on /leaders`)
})

.post((req, res, next) => {
    res.end(`Will add the leader: ${req.body.name}, with description: ${req.body.desc}.`)
})

.delete((req, res, next) => {
    res.end(`Deleting all the leaders.`)
})



leaderRouter.route('/:leaderId')

.all((req, res, next) => {
    res.statusCode = 200
    res.header('Content-Type', 'text/plain')
    next()

    console.log(`Request sent to /leaders/:leaderId`)
})

.get((req, res, next) => {
    res.end(`Will send details of the leader with id: ${req.params.leaderId}`)
})

.put((req, res, next) => {
    res.write(`Updating the leader: ${req.params.leaderId}\n`)
    res.end(`Will add the leaders: ${req.body.name}, with details: ${req.body.desc}.`)
})

.post((req, res, next) => {
    res.statusCode = 403
    res.end(`POST operation not supported on /leaders/:leaderId (${req.params.leaderId})`)
})

.delete((req, res, next) => {
    res.end('Deleting leader with id: ' + req.params.leaderId)
})



module.exports = leaderRouter