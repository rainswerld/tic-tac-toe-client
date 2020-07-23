'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
const gameActions = require('./game-actions/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // Auth events
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-pw').on('submit', authEvents.onChangePw)
  $('#sign-out').on('submit', authEvents.onSignOut)

  // Game listeners
  $('#create-game').on('submit', gameActions.onCreateGame)
  $('.box').on('click', gameActions.onBoardUpdate)
  $('#new-game').on('click', gameActions.onBoardRestart)
  $('.show-games').on('click', gameActions.onShowGames)
})
