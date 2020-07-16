curl --include --request POST 'https://tic-tac-toe-api-development.herokuapp.com/sign-up' \
  --header "Content-type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD}"'"
    }
  }'

echo
