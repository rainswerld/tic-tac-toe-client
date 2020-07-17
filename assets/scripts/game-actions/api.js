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

const boardUpdate = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/games/' + formData.game._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: 0,
          value: 'X'
        },
        over: false
      }
    }
  })
}

module.exports = {
  createGame,
  boardUpdate
}
