'use strict'

const store = require('../store')

const signUpSuccess = function (response) {
  $('#message').text('Sign Up Successful')
  $('form').trigger('reset')
  $('#authenticated').show()
  $('#unauthenticated').hide()
}

const signUpFailed = function (error) {
  $('#message').text('Sign Up Failed')
  console.log(error)
}

const signInSuccess = function (response) {
  $('#message').text('Signed In')
  $('form').trigger('reset')
  store.user = response.user
}

const signInFailed = function (error) {
  console.log(error)
  $('#message').text('Failed to sign in')
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
