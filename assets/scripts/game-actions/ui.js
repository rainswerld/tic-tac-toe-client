'use strict'

const store = require('../store')

const createGameSuccess = function (response) {
  $('#message').text('You created a game')

  const oneGame = (`
    <h3>${response.game.cells}<h3>
    <h4>${response.game._id}<h4>
    `)
  $('#content').html(oneGame)
}

const createGameFailed = function () {
  $('#message').text('You failed to create a game')
}

module.exports = {
  createGameSuccess,
  createGameFailed
}
