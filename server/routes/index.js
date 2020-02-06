const route = require('express').Router()
const todoRoute = require('./todoRoute')
const userRoute = require('./userRoute')
const authentication = require('../middlewares/authentication')

route.use('/users', userRoute)
route.use(authentication)
route.use('/todos', todoRoute)

module.exports = route