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
  console.log('this is the store.game in game success ', store.game)
}

const createGameFailed = function (response) {
  $('#message').text('You failed to create a game')
  store.game = response.game
}

const checkForWinner = function (response) {
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
  // else if (response all of them are filled, than it's a tie)
  $('#new-game').show()
}

const boardUpdateSuccess = function (response) {
  const index = store.cell.dataset.cellIndex
  store.game = response.game
  console.log('this is the response.game.cells on update ', response.game.cells)

  console.log('this is what store.game is in baordUpdateSuccess: ', store.game)
  // if response.game.over = true, turn off all event listeners except on new game button
  $(store.cell).text(store.game.cells[index])
  $('#message').text(store.player + ' turn ended')
  checkForWinner(response.game.cells)
}

const boardUpdateFailed = function (error) {
  console.log(error)
}

const createNewGameSuccess = function (response) {
  $('.box').text('')
  $('#message').text('')
  checkForWinner(response.game.cells)
  store.player = 'X'
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
