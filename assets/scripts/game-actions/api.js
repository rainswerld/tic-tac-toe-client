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

const boardUpdate = function (index, player) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: index,
          value: player
        },
        over: false
      }
    }
  })
}

const createNewGame = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const gameOver = function (game, index, player) {
  return $.ajax({
    url: config.apiUrl + '/games/' + game._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: index,
          value: player
        },
        over: true
      }
    }
  })
}

const showGames = function () {
  return $.ajax({
    url: config.apiUrl + '/games/' + '?over=true',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  createGame,
  boardUpdate,
  createNewGame,
  gameOver,
  showGames
}
