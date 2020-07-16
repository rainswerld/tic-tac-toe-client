'use strict'

const store = require('../store')

const signUpSuccess = function (response) {
  $('#message').text('Sign Up Successful')
  $('form').trigger('reset')
}

const signUpFailed = function (error) {
  $('#message').text('Sign Up Failed')
  console.log(error)
}

const signInSuccess = function (response) {
  $('#message').text('Signed In')
  $('form').trigger('reset')
  store.user = response.user
  console.log(store.user)
}

const signInFailed = function (error) {
  console.log(error)
  $('#message').text('Failed to sign in')
}

const changePwSuccess = function () {
  $('#message').text('Changed password!')
}

const changePwFailed = function (error) {
  console.log(error)
  $('#message').text('Failed to change password!')
}

module.exports = {
  signUpSuccess,
  signUpFailed,
  signInSuccess,
  signInFailed,
  changePwSuccess,
  changePwFailed
}
