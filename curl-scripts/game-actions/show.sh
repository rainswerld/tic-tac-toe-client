curl --include --request GET "https://tic-tac-toe-api-development.herokuapp.com/games/${ID}" \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \

echo
