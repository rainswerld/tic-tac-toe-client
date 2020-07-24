'use strict'

const store = require('../store')

const api = require('./api')

const createGameSuccess = function (response) {
  $('#message').text('You created a game')
  store.game = response.game
  $('.box').text('')
  $('#board').show()
}

const createGameFailed = function (response) {
  $('#message').text('You failed to create a game')
  store.game = response.game
}

const gameOverSuccess = function (response) {
  const player = store.player
  $('.box').hide()
  $('#message').text('congrats! ' + player + ' wins the game!')
}

const gameOverFailure = function (error) {
  console.log(error)
}

const gameOverTie = function (response) {
  $('.box').hide()
  $('#message').text('IT\'S A TIE!')
}

const showGamesSuccess = function (response) {
  console.log(response.games.length)
  $('.score-board').text('Games played: ' + response.games.length)
}

const showGamesFailure = function (error) {
  console.log(error)
}

const checkForWinner = function (response) {
  const game = store.game
  const index = store.cell.dataset.cellIndex
  const player = store.player
  // row 1
  if ((response[0] || response[1] || response[2] !== "") && (response[0] == response[1]) && (response[1] == response[2])) {
    api.gameOver(game, index, player)
      .then(gameOverSuccess)
      .catch(gameOverFailure)
  }
  // row 2
  else if ((response[3] || response[4] || response[5] !== "") && (response[3] == response[4]) && (response[4] == response[5])) {
    api.gameOver(game, index, player)
      .then(gameOverSuccess)
      .catch(gameOverFailure)
  } // row 3
  else if ((response[6] || response[7] || response[8] !== "") && (response[6] == response[7]) && (response[7] == response[8])) {
    api.gameOver(game, index, player)
      .then(gameOverSuccess)
      .catch(gameOverFailure)
  } // column 1
  else if ((response[0] || response[3] || response[6] !== "") && (response[0] == response[3]) && (response[3] == response[6])) {
    api.gameOver(game, index, player)
      .then(gameOverSuccess)
      .catch(gameOverFailure)
  } // column 2
  else if ((response[1] || response[4] || response[7] !== "") && (response[1] == response[4]) && (response[4] == response[7])) {
    api.gameOver(game, index, player)
      .then(gameOverSuccess)
      .catch(gameOverFailure)
  } // column 3
  else if ((response[2] || response[5] || response[8] !== "") && (response[2] == response[5]) && (response[5] == response[8])) {
    api.gameOver(game, index, player)
      .then(gameOverSuccess)
      .catch(gameOverFailure)
  } // top to bottom diagonal
  else if ((response[0] || response[4] || response[8] !== "") && (response[0] == response[4]) && (response[4] == response[8])) {
    api.gameOver(game, index, player)
      .then(gameOverSuccess)
      .catch(gameOverFailure)
  } // bottom to top diagonal
  else if ((response[6] || response[4] || response[2] !== "") && (response[6] == response[4]) && (response[4] == response[2])) {
    // put API function in here
    api.gameOver(game, index, player)
      .then(gameOverSuccess)
      .catch(gameOverFailure)
  } // else if (response all of them are filled, than it's a tie)
  else if ((response[0] && response[1] && response[2] && response[3] && response[4] && response[5] && response[6] && response[7] && response[8]) !== "") {
    api.gameOver(game, index, player)
      .then(gameOverTie)
      .catch(gameOverTieFailed)
  }
}

const boardUpdateSuccess = function (response) {
  const index = store.cell.dataset.cellIndex
  store.game = response.game
  $(store.cell).text(store.game.cells[index])
  $('#message').text(store.player + ' turn ended')
  checkForWinner(response.game.cells)
}

const boardUpdateFailed = function (error) {
  console.log(error)
}


module.exports = {
  createGameSuccess,
  createGameFailed,
  boardUpdateSuccess,
  boardUpdateFailed,
  checkForWinner,
  showGamesSuccess,
  showGamesFailure,
  gameOverTie
}
