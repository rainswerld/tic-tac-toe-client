'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')

const api = require('./api.js')

const ui = require('./ui.js')

const onCreateGame = function () {
  event.preventDefault()
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailed)
}

const onBoardUpdate = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  // console.log(formData)
  api.boardUpdate(formData)
    .then(ui.boardUpdateSuccess)
    .catch(ui.boardUpdateFailed)
}

module.exports = {
  onCreateGame,
  onBoardUpdate
}
