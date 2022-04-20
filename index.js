console.log("Hello");

var player = "O";

// $("#0-0").text("X");

var grid = [
  ["0-0", "0-1", "0-2"],
  ["1-0", "1-1", "1-2"],
  ["2-0", "2-1", "2-2"]
];


$(".cell").click(function() {
  if (player == "O") {
    player = "X";
    $(".title").text("Player " + player + "'s turn!");
  } else {
    player = "O";
    $(".title").text("Player " + player + "'s turn!");
  }

  var clickedCell = $(this).attr("id");

  if ($("#" + clickedCell).text() == "X" || $("#" + clickedCell).text() == "O") {
    console.log("This box is already filled.");
    return;
  } else {
    console.log(player + " marked in box " + clickedCell);
    $("#" + clickedCell).text(player);
    pushToGrid();
    isWin();
  }


  function pushToGrid() {
    var identifyRow = parseInt(clickedCell.charAt(0));
    var positionClickedCell = grid[identifyRow].indexOf(clickedCell);

    grid[identifyRow].splice(positionClickedCell, 1, player);
    console.log(grid);

  }


})


function isWin() {
  for (let r = 0; r < 3; r++) {
    isHorizontalWin(grid, player, r)
  }
  for (let c = 0; c < 3; c++) {
    isVerticalWin(grid, player, c);
  }
  isDiagonalUpWin(grid, player);
  // console.log("PLAYER " + player + " WINS!");
  // return;
  isDiagonalDownWin(grid, player);

  $(".title").text("Player " + player + " wins!");


}

function isHorizontalWin(grid, player, r) {
  for (let c = 0; c < 3; c++) {
    if (grid[r][c] === player) {
      continue;
    } else {
      return;
    }
  }
  console.log("horiz win");

}


function isVerticalWin(grid, player, c) {
  for (let r = 0; r < 3; r++) {
    if (grid[r][c] === player) {
      continue;
    } else {
      return;
    }
  }
  console.log("vert win");
}

function isDiagonalUpWin(grid, player) {
  if (grid[0][2] === player && grid[1][1] === player && grid[2][0] === player) {
    console.log("diag UP win!");
  } else {
    return
  }
}

function isDiagonalDownWin() {
  if (grid[0][0] === player && grid[1][1] === player && grid[2][2] === player) {
    console.log("diag DOWN win");
  } else {
    return
  }

}




//
//
//
// //PANDU:
// addMark(1, 2, "O");
//
// [
//   ["X", "", "O"],
//   ["", "", "O"],
//   ["X", "", ""]
// ]
//
// function addStrike() {}
//
//
// function isWin(
//   grid, /* [["X", ...], ...] */
//   player /* "X" or "O" */
// ) {
//   for (let r = 0; r < 3; r++) {
//     if (isHorizontalWin(grid, r, player)) {
//       return true;
//     }
//   }
//
//   // for (let c ...) {
//   //	 isVerticalWin(...);
//   // }
//
//   if (isDiagonalUpWin(grid, player)) {
//     return true;
//   }
//
//   // if (isDiagonalDownWin(...) { ... }
//
//   return false;
// }
//
// isHorizontalWin(grid, "X", 0);
//
// function isHorizontalWin(grid, player, r) {
//   for (let c = 0; c < 3; c++) {
//     if (grid[r][c] !== player) {
//       return false;
//     }
//   }
//   return true;
// }
//
//
// // . . X
// // . X .
// // X . .
// function isDiagonalUpWin(grid, player) {
//   return (
//     grid[2][0] === player &&
//     grid[1][1] === player &&
//     grid[0][2] === player
//   );
// }
//
// // X . .
// // . X .
// // . . X
