const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const fs = require('fs')
// create our express app
const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

// route
const indexRoutes = require('./routes/index')
app.use('/', indexRoutes)

//start server
app.listen(3000, () => {
  console.log('listeniing at port:3000')
})
