const fs = require('fs')

const dataPath = './data/games.json'

// util functions

exports.saveGameData = data => {
  const stringifyData = JSON.stringify(data)
  fs.writeFileSync(dataPath, stringifyData)
}

exports.getGameData = () => {
  const jsonData = fs.readFileSync(dataPath)
  return JSON.parse(jsonData)
}
