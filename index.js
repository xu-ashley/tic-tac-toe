console.log("Hello");

var player = "X";

// $("#0-0").text("X");

var grid = [
  ["0-0", "0-1", "0-2"],
  ["1-0", "1-1", "1-2"],
  ["2-0", "2-1", "2-2"]
];


$(".cell").click(function() {
  var clickedCell = $(this).attr("id");

  console.log(player + " marked in box " + clickedCell);
  $("#" + clickedCell).text(player);

  function pushToGrid() {
    var identifyRow = parseInt(clickedCell.charAt(0));
    var positionClickedCell = grid[identifyRow].indexOf(clickedCell);

    grid[identifyRow].splice(positionClickedCell, 1, player);
    console.log(grid);
    
  }

  pushToGrid();

  if (player == "X") {
    player = "O";
    $(".title").text("Player " + player + "'s turn!");
  } else {
    player = "X";
    $(".title").text("Player " + player + "'s turn!");
  };
})


// function pushToGrid() {
//
// }



// // function pushToGrid() {
// //   // for (let i = 0; i < 3; i++)
// //
// //   for(let i = 0; i < grid.length; i++) {
// //
// //      for(let j = 0; j < grid.length; j++) {
// //        grid.splice(grid.indexOf(this.id), 1, player);
// //      }
// //   }
// //   console.log(grid);
// //
// // }
//
//
//
// //PANDU:
// addMark(1, 2, "O");
//
// [["X", "", "O"], ["", "", "O"],["X", "", ""]]
//
//
//
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
