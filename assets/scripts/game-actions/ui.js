'use strict'

const store = require('../store')

// const api = require('./api')
//
// const gameEvents = require('./events.js')

const createGameSuccess = function (response) {
  $('#message').text('You created a game')
  store.game = response.game
  // const oneGame = (`
  //   <h3>${response.game.cells}</h3>
  //   <h4>${response.game.over}</h4>
  //   <h4>${response.game._id}</h4>
  //   `)
  // $('#content').html(oneGame)
}

const createGameFailed = function (response) {
  $('#message').text('You failed to create a game')
  store.game = response.game
  // console.log(store.game)
}

const boardUpdateSuccess = function (response) {
  // want this to eventually be any box that's clicked on gets updated
  $(store.cell).text(response.game.cells[store.cell.dataset.cellIndex])
}

const boardUpdateFailed = function () {
  $('#message').text('failed to update game')
}

const boardRestart = function (response) {
  $(store.cell).trigger('reset')
}

module.exports = {
  createGameSuccess,
  createGameFailed,
  boardUpdateSuccess,
  boardUpdateFailed,
  boardRestart
}
