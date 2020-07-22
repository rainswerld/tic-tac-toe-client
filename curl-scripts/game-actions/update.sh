curl --include --request PATCH "https://tic-tac-toe-api-development.herokuapp.com/games/${ID}" \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "game": {
      "cell": {
        "index": 0,
        "value": "x"
      },
      "over": false
    }
  }'

echo
