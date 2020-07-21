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
  console.log('this is the create game ', store.game.cells)
  const index = $(event.target).data('cell-index')
  if (store.game.cells[index] !== '') {
    api.createNewGame()
      .then(ui.createNewGameSuccess)
      .catch(ui.createNewGameFailed)
  }
  // loop over game.cells and popular divs with corresponding ID with value of the cell as the text
  // console.log('this is the value of store.game ', store.game)
  // const cells = store.game.cells
  // cells.forEach(element => console.log('this is the forEach', element))
}

const onBoardUpdate = function (event) {
  event.preventDefault()
  store.cell = event.target
  const index = $(event.target).data('cell-index')

  console.log('this is the value of store.game in update ', store.game)
  console.log('this is the value in the if statement ', store.game.cells[index])
  if (store.game.cells[index] === '') {
    changeTurn()
    api.boardUpdate(index, store.player)
      .then(ui.boardUpdateSuccess)
      .catch(ui.boardUpdateFailed)
  } else {
    $('#messsage').text('invalid move')
  }
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
  changeTurn
}
