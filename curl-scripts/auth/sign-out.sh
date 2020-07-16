curl --include --request DELETE "https://tic-tac-toe-api-production.herokuapp.com/sign-out" \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{

  }'

echo
