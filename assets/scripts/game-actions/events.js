'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')

const api = require('./api.js')

const ui = require('./ui.js')

const store = require('../store.js')

const onCreateGame = function () {
  event.preventDefault()
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailed)
}

const onBoardUpdate = function (event) {
  event.preventDefault()
  // formData needs to equal the ID of the game
  console.log(store.game._id)
  const formData = store.game._id
  // console.log(formData)
  api.boardUpdate(formData)
    .then(ui.boardUpdateSuccess)
    .catch(ui.boardUpdateFailed)
}

module.exports = {
  onCreateGame,
  onBoardUpdate
}
