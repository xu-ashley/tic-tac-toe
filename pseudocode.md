# Titles
## Title 2
**bold**
[Links](link.com)


#Wins
- [starting code from pandu!](https://pastebin.com/CVT2cVkN)

## Basic
1. Player X
2. Player O

## TO-DO:
 [x]center game board
 [x]push X/O to array
 [x]stop the X/O switching when click on filled cell
    (moved if statement to nest inside "else" statement)
 [x]end game when all cells filled
     [x]TIE
         IF...all squares filled (all squares contain O or X), AND isWin=falsel; then, TIE!

 *[]after WIN, don't allow any more cells to be filled*
    click anywhere-- "refresh the page to start a new game."

## Clicks
[x] click a box, put a **mark**
  [x] push "mark" to array
  [x] console.log(array)


## HTML
[x]Player X's turn
[x]Player O's turn
[x]Player _ wins!
[x]Tie!
[x] if click on a space w/ text in it: "PLEASE CLICK EMPTY SQUARE"

## Wins Attempt 1
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

## push/put "X" or "O" in array!
- click square, get ID
- based on id, figure out where in array to place the X or O!

- check first element of array [ "0-0" , "0-1" , "0-2"]
  - does this array contain the ID?
  - if not, continue
check second element [ , , ]

# Push To Grid Array Attempt 2
row
cell
if this.id = "0-" + x
then grid[0][x].push(player)

  for (let r = 0; r < 3; r++){
    for (let c = 0; c < 3; c++){
      if (this.id === r + "-" + c){
        grid[r].splice(c, 1, player);
      }
    }
  }

# WINS
- HORIZONTAL: if grid[r][0], grid[r][1], grid[r][2] = all X's or O's
- VERTICAL: if grid[0][c], grid[1][c], grid[2][c] = all X's or O's
- DIAGONAL: custom
