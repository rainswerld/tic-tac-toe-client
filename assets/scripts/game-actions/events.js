'use strict'

// const getFormFields = require('../../../lib/get-form-fields.js')

const api = require('./api.js')

const ui = require('./ui.js')

const store = require('../store.js')

let turn = 1
store.player = 'X'

const changeTurn = function () {
  if (turn % 2 === 1) {
    store.player = 'X'
  } else {
    store.player = 'O'
  }
  turn++
}

const onCreateGame = function () {
  event.preventDefault()
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailed)
}

const onBoardUpdate = function (event) {
  event.preventDefault()
  store.cell = event.target
  const index = $(event.target).data('cell-index')
  changeTurn()
  api.boardUpdate(index, store.player)
    .then(ui.boardUpdateSuccess)
    .catch(ui.boardUpdateFailed)
  $(event.target).off('click', onBoardUpdate)
}

const onBoardRestart = function (event) {
  event.preventDefault()
  api.createNewGame()
    .then(ui.createNewGameSuccess)
    .catch(ui.createNewGameFailed)
}

module.exports = {
  onCreateGame,
  onBoardUpdate,
  onBoardRestart,
  changeTurn
}
