'use strict'

const store = require('../store')

const signUpSuccess = function (response) {
  $('#message').text('Sign Up Successful')
  $('form').trigger('reset')
}

const signUpFailed = function (error) {
  $('#message').show()
  $('#message').text('Sign Up Failed')
  console.log('this is your error', error)
}

const signInSuccess = function (response) {
  $('#message').text('Signed In')
  $('form').trigger('reset')
  store.user = response.user
  $('#authenticated').show()
  $('#unauthenticated').hide()
  $('#new-game').hide()
  $('#board').hide()
}

const signInFailed = function (error) {
  console.log(error)
  $('#fail-message').text('Failed to sign in')
}

const changePwSuccess = function () {
  $('#message').text('Changed password!')
  $('form').trigger('reset')
}

const changePwFailed = function (error) {
  console.log(error)
  $('#message').text('Failed to change password!')
}

const signOutSuccess = function () {
  $('#message').text('You signed out')
  $('#authenticated').hide()
  $('#unauthenticated').show()
  $('#content').hide()
}

const signOutFailed = function (error) {
  console.log(error)
  $('#message').text('Sign out failed')
}



module.exports = {
  signUpSuccess,
  signUpFailed,
  signInSuccess,
  signInFailed,
  changePwSuccess,
  changePwFailed,
  signOutSuccess,
  signOutFailed
}
