#Titles
##Title 2
**bold**
[Links](link.com)
1. asdf
2. asdf

#Wins
- [starting code from pandu!](https://pastebin.com/CVT2cVkN)

## Basic
1. Player X
2. Player O

##T O-DO:
 [x]center game board

Clicks
- click a box, put a **mark**
  - push "mark" to array
  - console.log arrays






## Extras Pretty
- Invert colors button!


## HTML
Player X's turn
Player O's turn

Player _ wins!
Tie!

- if click on a space w/ text in it: "PLEASE CLICK EMPTY SQUARE"

## Wins Attempt
array row 0
Array row 1:
array row 2:

var grid = [];

var grid = [
  [0-0, 0-1, 0-2],
  [1-0, 1-1, 1-2],
  [2-0, 2-1, 2-2]
];


grid[0] = [0-0, 0-1, 0-2];
grid[1] = [1-0, 1-1, 1-2];
grid[2] = [2-0, 2-1, 2-2];

- when cell clicked, push "player" value to that position; event listener (onClick)
  - onClick class = "cell",
  push player value (X or O) to grid.indexOf[id]

onClick:
  - push grid.splice(grid.indexOf(#id), 1, player);
  - addMark

array.splice(array.indexOf(valueToReplace), 1, newValue);


ok so player X goes...then "player O's turn!" and player O goes..
- if player = "X", change to player = O

if (value == 'string0') {
	value = 'string1';
} else {
	value = 'string0';
}

player = "X"


if (player == "X") {
	player = "O";
} else {
	player = "X";
}
