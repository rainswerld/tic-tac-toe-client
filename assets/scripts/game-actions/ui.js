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

const checkForWinner = function (response) {
  // console.log('this is the winner response: ', response)
  // row 1
  if ((response[0] || response[1] || response[2] !== "") && (response[0] == response[1]) && (response[1] == response[2])) {
    $('#message').text(store.player + ' has won the game')
  }
  // row 2
  else if ((response[3] || response[4] || response[5] !== "") && (response[3] == response[4]) && (response[4] == response[5])) {
    $('#message').text(store.player + ' has won the game')
  } // row 3
  else if ((response[6] || response[7] || response[8] !== "") && (response[6] == response[7]) && (response[7] == response[8])) {
    $('#message').text(store.player + ' has won the game')
  } // column 1
  else if ((response[0] || response[3] || response[6] !== "") && (response[0] == response[3]) && (response[3] == response[6])) {
    $('#message').text(store.player + ' has won the game')
  } // column 2
  else if ((response[1] || response[4] || response[7] !== "") && (response[1] == response[4]) && (response[4] == response[7])) {
    $('#message').text(store.player + ' has won the game')
  } // column 3
  else if ((response[2] || response[5] || response[8] !== "") && (response[2] == response[5]) && (response[5] == response[8])) {
    $('#message').text(store.player + ' has won the game')
  } // top to bottom diagonal
  else if ((response[0] || response[4] || response[8] !== "") && (response[0] == response[4]) && (response[4] == response[8])) {
    $('#message').text(store.player + ' has won the game')
  } // bottom to top diagonal
  else if ((response[6] || response[4] || response[2] !== "") && (response[6] == response[4]) && (response[4] == response[2])) {
    $('#message').text(store.player + ' has won the game')
  }
  $('#new-game').show()
}

const boardUpdateSuccess = function (response) {
  $(store.cell).text(response.game.cells[store.cell.dataset.cellIndex])
  console.log(store.player)
  checkForWinner(response.game.cells)
}

const boardUpdateFailed = function (error) {
  console.log(error)
}

const createNewGameSuccess = function (response) {
  $('.box').text('')
  $('#message').text('')
}

const createNewGameFailed = function (error) {
  console.log(error)
}

module.exports = {
  createGameSuccess,
  createGameFailed,
  boardUpdateSuccess,
  boardUpdateFailed,
  createNewGameSuccess,
  createNewGameFailed,
  checkForWinner
}
