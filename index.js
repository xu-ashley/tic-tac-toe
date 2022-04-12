console.log("Hello");

// $("#0-0").text("X");

function addMark(row, column, mark) {
  $("#" + row + "-" + column).text(mark);
}

addMark(1, 2, "O");

// [["X", "", "O"], ["", "", "O"],["X", "", ""]]
