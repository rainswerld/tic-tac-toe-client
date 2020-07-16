'use strict'

const config = require('../config.js')

const store = require('../store.js')

const createGame = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}


module.exports = {
  createGame
}
