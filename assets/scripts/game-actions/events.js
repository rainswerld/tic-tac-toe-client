'use strict'

// const getFormFields = require('../../../lib/get-form-fields.js')

const api = require('./api.js')

const ui = require('./ui.js')

const store = require('../store.js')

let turn = 1
store.player = 'X'

const changeTurn = function () {
  console.log('this is what turn is when it enters the function ', turn)
  if (turn % 2 === 1) {
    store.player = 'X'
  } else {
    store.player = 'O'
  }
  turn++
  console.log('this is what turn is when it excits the function', turn)
}

const onCreateGame = function () {
  event.preventDefault()
  turn = 1
  store.player = 'X'
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailed)
}

const onBoardUpdate = function (event) {
  event.preventDefault()
  store.cell = event.target
  const index = $(event.target).data('cell-index')

  if (store.game.cells[index] === '') {
    changeTurn()
    api.boardUpdate(index, store.player)
      .then(ui.boardUpdateSuccess)
      .catch(ui.boardUpdateFailed)
  } else {
    console.log('invalid move')
    $('#message').text('you can\'t go there silly')
  }
}

const onShowGames = function (event) {
  event.preventDefault()
  api.showGames()
    .then(ui.showGamesSuccess)
    .catch(ui.showGamesFailure)
}
//
// const onBoardRestart = function (event) {
//   event.preventDefault()
//   $(event.target).on('click', onBoardUpdate)
//   api.createNewGame()
//     .then(ui.createNewGameSuccess)
//     .catch(ui.createNewGameFailed)
// }

module.exports = {
  onCreateGame,
  onBoardUpdate,
  // onBoardRestart,
  changeTurn,
  onShowGames
}
