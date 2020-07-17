'use strict'

const store = require('../store')

const createGameSuccess = function (response) {
  $('#message').text('You created a game')
  store.game = response.game
  const oneGame = (`
    <h3>${response.game.cells}</h3>
    <h4>${response.game.over}</h4>
    <h4>${response.game._id}</h4>
    `)
  $('#content').html(oneGame)
}

const createGameFailed = function (response) {
  $('#message').text('You failed to create a game')
  store.game = response.game
  console.log(store.game)
}

const boardUpdateSuccess = function (response) {
  console.log(response)
}

const boardUpdateFailed = function (error) {
  console.log(error)
}

module.exports = {
  createGameSuccess,
  createGameFailed,
  boardUpdateSuccess,
  boardUpdateFailed
}
