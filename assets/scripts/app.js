'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
const gameActions = require('./game-actions/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-pw').on('submit', authEvents.onChangePw)
  $('#sign-out').on('submit', authEvents.onSignOut)

  // Game listeners
  $('#create-game').on('submit', gameActions.onCreateGame)
  $('#box-one').on('click', gameActions.onBoardUpdate)
  $('#box-two').on('click', gameActions.onBoardUpdate)
  $('#box-three').on('click', gameActions.onBoardUpdate)
  $('#box-four').on('click', gameActions.onBoardUpdate)
  $('#box-five').on('click', gameActions.onBoardUpdate)
  $('#box-six').on('click', gameActions.onBoardUpdate)
  $('#box-seven').on('click', gameActions.onBoardUpdate)
  $('#box-eight').on('click', gameActions.onBoardUpdate)
  $('#box-nine').on('click', gameActions.onBoardUpdate)
})
