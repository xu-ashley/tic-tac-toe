
var player = "O";

var grid = [
  ["0-0", "0-1", "0-2"],
  ["1-0", "1-1", "1-2"],
  ["2-0", "2-1", "2-2"]
];

$(".cell").click(function() {

  var clickedCell = $(this).attr("id");

  if (isWin() === true || isTie() === true) {
    $(".directions").html("To restart game, refresh the page.")
    return;
  }

  if ($("#" + clickedCell).text() == "X" || $("#" + clickedCell).text() == "O") {
    console.log("This box is already filled.");
    $(".directions").text("Please click on an empty square.");
    return;

  } else {
    if (player == "O") {
      $(".title").text("Player " + player + "'s turn!");
      player = "X";
    } else {
      $(".title").text("Player " + player + "'s turn!");
      player = "O";
    }

    $(".directions").text("");

    console.log(player + " marked in box " + clickedCell);

    $("#" + clickedCell).text(player);

    pushToGrid();

    if (isTie() === true) {
      console.log("*** TIE ***");
      $(".title").text("It's a TIE!");
      return;
    }

    if (isWin() === true) {
      $(".title").text(player + " WINS!");
      return;
    }
  }

  function pushToGrid() {
    var identifyRow = parseInt(clickedCell.charAt(0));
    var positionClickedCell = grid[identifyRow].indexOf(clickedCell);

    grid[identifyRow].splice(positionClickedCell, 1, player);
    console.log(grid);
  }
})

function isTie() {
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      if (grid[r][c] != "X" && grid[r][c] != "O") {
        return false;
      }
    }
  }
  return true;
}

function isWin() {
  for (let r = 0; r < 3; r++) {
    if (isHorizontalWin(grid, player, r)) {
      return true;
    }
  }

  for (let c = 0; c < 3; c++) {
    if (isVerticalWin(grid, player, c)) {
      return true;
    }
  }

  if (isDiagonalUpWin(grid, player)) {
    return true;
  }

  if (isDiagonalDownWin(grid, player)) {
    return true;
  }
}

function isHorizontalWin(grid, player, r) {
  for (let c = 0; c < 3; c++) {
    if (grid[r][c] !== player) {
      return false;
    }
  }
  return true;
}

function isVerticalWin(grid, player, c) {
  for (let r = 0; r < 3; r++) {
    if (grid[r][c] !== player) {
      return false
    }
  }
  return true;
}

function isDiagonalUpWin(grid, player) {
  if (grid[0][2] === player && grid[1][1] === player && grid[2][0] === player) {
    return true;
  } else {
    return false;
  }
}

function isDiagonalDownWin() {
  if (grid[0][0] === player && grid[1][1] === player && grid[2][2] === player) {
    return true;
  } else {
    return false;
  }

}
