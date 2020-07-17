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
  console.log('i am here')
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.boardUpdate(formData)
    .then(console.log(formData.game.call.index[0]))
    .catch(console.log('this failed'))
}

module.exports = {
  onCreateGame,
  onBoardUpdate
}
