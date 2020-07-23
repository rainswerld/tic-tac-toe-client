# Tic Tac Toe: Are you better than you?

This application allows you to sign-up as a new user, sign-in as a new user, and play a game of the classic tic-tac-toe!

Of course, if you're worried about the security of your account, you can change your password too.

Why did I call this Tic Tac Toe: Are you better than you? Glad you asked! It's because you play as both X and O in this version of the game. You are pitted against your own wits to try and beat YOURSELF at a game of tic tac toe. May the odds be in the best version of yourself.

## Important Links

- [Play Tic Tac Toe (Deployed Game)](https://rainswerld.github.io/tic-tac-toe-client/)

## Planning Story

I began my planning with breaking down each feature to narrow down a very large project into small, achievable goals that resulted in successfully creating a tic tac toe game.

I broke my days up into committing new features into the game beginning with authenticating a user and allowing them to sign up, sign in, change password, and sign out.

Once completed, I then moved onto setting up the foundatino for the Game UI - how the user can update the game board to reflect their choices and whether or not an X or and O should be placed on the board. This required modular code where authentication events and game events were separated.

After making the neceessary AJAX requests to get certain information from the API, I was then able to build the game logic - who will win, and what happens when X or O wins?

I used Asana to break down each feature into smaller steps. This helped me organize what my focus should be on while also making sure I hit the requirements I listed in my user stories.

### Problem Solving

There were many unintended "features" that I wanted to change through the process of developing this game. When I encountered those problems, I would often take a step back and try to understand WHY this particular problem would be popping up. Often times it was an issue of not accessing the right data or not invoking a function at the right time.

I relied heavily on logging data out to the console so I could better understand why I encountered certain bugs, or what data I was dealing with so I knew whether or not it was a data issue, a function issue, or an error between the chair and the screen.

My method for problem solving broken down was:
1. Take a break and come back to the code with fresh eyes
2.  If I still had a problem, I would seek the advice from engineers that knew more than me
3.  If I still had a problem, I would try and learn more about the particular issue I was dealing with (i.e. If my AJAX request wasn't behaving like I wanted meant that I needed to go learn more about AJAX requests)

Often times I would get to the second step, but before sending my question I would solve my own problem simply by being forced to put my problem into words another engineer could understand. 


### User Stories

- As a user, I want to sign up and sign in.
- As a user, I want to change my password.
- As a user, I want to play a game of tic tac toe.
- As a user, I want to know if the game is over or not.

### Technologies Used

- HTML
- JavaScript
- AJAX

### Unsolved Problems

I would still like to build some functionality:
- showing how many games a particular user has played
- playing against the computer
- playing against another user
- hiding the board on sign in

I would also like to add some styling. Right now, the board is very bare bones and I'd like it to reflect my personality or a certain theme so the user has a bit more fun playing.

Additionally a lot of the menus and messages aren't stylized yet. That is something that will come in the near future!

## Wireframes

Check out my wireframes!
[Wireframe 1](https://imgur.com/IOs2bOF)
[Wireframe 2](https://imgur.com/hL2TE0Y)
[Wireframe 3](https://imgur.com/pPsVha3)
