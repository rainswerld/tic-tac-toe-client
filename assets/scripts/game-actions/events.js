'use strict'

// const getFormFields = require('../../../lib/get-form-fields.js')

const api = require('./api.js')

const ui = require('./ui.js')

const store = require('../store.js')

let turn = 0
let player

const changeTurn = function () {
  player = 'X'
  turn++
  if (turn % 2 == 0) {
    player = 'O'
  } else {
    player = 'X'
  }
}


const onCreateGame = function () {
  event.preventDefault()
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailed)
}

const onBoardUpdate = function (event) {
  changeTurn()
  event.preventDefault()
  store.cell = event.target
  const index = $(event.target).data('cell-index')
  api.boardUpdate(index, player)
    .then(ui.boardUpdateSuccess)
    .catch(ui.boardUpdateFailed)
}

const onBoardRestart = function (event) {
  event.preventDefault()
  ui.boardRestart(event)
}

module.exports = {
  onCreateGame,
  onBoardUpdate,
  onBoardRestart
}
