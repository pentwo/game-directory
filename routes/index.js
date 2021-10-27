const express = require('express')
const router = express.Router()
const fs = require('fs')

// import { saveGameData, getGameData } from '../controllers/gameController'
const gameController = require('../controllers/gameController')

router.get('/', function (req, res, next) {
  const data = gameController.getGameData()
  // res.send(data)
  res.render('index', { title: "Steven's game valet", games: data })
})

module.exports = router
