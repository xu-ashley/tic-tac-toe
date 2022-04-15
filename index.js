console.log("Hello");

var player = "O";

// $("#0-0").text("X");




function addMark(row, column, mark) {
  $("#" + row + "-" + column).text(mark);

  if (player == "X") {
    player = "O";
  } else {
    player = "X";
  };
}

addMark(1, 2, "O");

// [["X", "", "O"], ["", "", "O"],["X", "", ""]]


//
//
// var grid = [
//   [0-0, 0-1, 0-2],
//   [1-0, 1-1, 1-2],
//   [2-0, 2-1, 2-2]
// ];
//
// function addStrike(){
//
// }
//
//
// function isWin(
// 	grid, /* [["X", ...], ...] */
// 	player /* "X" or "O" */
// ) {
// 	for (let r = 0; r < 3; r++) {
// 		if (isHorizontalWin(grid, r, player)) {
// 			return true;
// 		}
// 	}
//
// 	// for (let c ...) {
// 	//	 isVerticalWin(...);
// 	// }
//
// 	if (isDiagonalUpWin(grid, player)) {
// 		return true;
// 	}
//
// 	// if (isDiagonalDownWin(...) { ... }
//
// 	return false;
// }
//
// isHorizontalWin(grid, "X", 0);
//
// function isHorizontalWin(grid, player, r) {
// 	for (let c = 0; c < 3; c++) {
//     if (grid[r][c] !== player) {
// 			return false;
// 		}
// 	}
// 	return true;
// }
//
// // . . X
// // . X .
// // X . .
// function isDiagonalUpWin(grid, player) {
// 	return (
// 		grid[2][0] === player &&
// 		grid[1][1] === player &&
// 		grid[0][2] === player
// 	);
// }
//
// // X . .
// // . X .
// // . . X
