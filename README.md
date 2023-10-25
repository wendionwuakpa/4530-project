# 4530-project
Covey.Town group project sandbox

## Welcome to Group 407's Project: Covey Town Wordle!

## Features

# Customizable Difficulty
- Our implementation of Wordle allows Covey.Town players to change the difficulty to suit their playstyle! Players have following length options:
- 5 word - Easy
- 6 word - Normal
- 7 word - Expert 

# Leaderboard/Ranking
- Players can keep track of their daily performance on the leaderboard where they can see information such as the number of words they guess correctly, other players scores and who the leading player is. We're optionally looking at including the time the players finished the game as an additional ranking parameter.

- This leaderboard persists for as long as our users stay in town to ensure it doesn't get too crowded.


# Gameplay
- Our game brings the same basic features wordle players know and love.
- Players have 5 guesses per word before they have to switch to a different word.
- The words are highlighted based on whether they are or aren't included in the goal word. The following colors represent the accuracy of a guess:
- Red: Letter isn't included in the goal word
- Yellow: Letter is included in the goal word but in the incorrect spot
- Green: Letter is included in the goal word and in the correct spot.

- Players will be able to type in the words from the keyboard or using a virtual keyboard on the screen

- We plan to add animations for correct, incorrect and ending scenarios to bring the game to richer life.

- Our word bank is generated specifically for each game using REST API's. This is to ensure maximum varibility within each game.


# Major Classes and Interfaces
- In order to implement this idea, we created the following classes which handle different aspects of the game:

- WordleGameArea
Represents the InteractableArea on the map that hosts the WordleGame
- WordleArea
Represents all frontend UI in our Wordle game, including the Grid, virtual keyboard  (if necessary) and any other miscellaneous information.
- WordleGameAreaController
Represents the controller which is used in the frontend to update the UI when the user interacts with the grid.
- WordleGame 
(Extends Game) Represents the model which drives the logic of the Wordle Game.
- Grid
Renders the visual Wordle grid.

# Types:
Use shared types from CoveyTownSocket.d.ts
- GameStatus
The same existing GameStatus as TicTacToe (waiting_to_start, in_progress, over) 
- InteractableType
Add ‘WordleArea’ type to the existing InteractableType ('ConversationArea' | 'ViewingArea' | 'TicTacToeArea').
- WordleDifficulty
Creates options for word length such as ‘five_letter’ | ‘six_letter’ | ‘seven_letter’ that the word generator will select for

# Interfaces:
Use shared interfaces file from CoveyTownSocket.d.ts
- WordleGameState
Represents the current state of the Wordle game such as what the goal word is, the number of attempts the user has, the guesses made by the player during the game, and whether the player has won or not.
- WordleMove
Represents the type for a WordleMove such as which word the user picks
is a <MoveType> for GameMoveCommand 
