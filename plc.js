/*

7:30 = 0
8:30 = 1
9:30 = 2
10:30 = 3
11:30 = 4
12:30 = 5
1:30 = 6
2:30 = 7
3:30 = 8

Hi, Hunter Karas. 

*/

var subjects = [];
var days = ['A', 'B', 'C', 'D', 'E', 'F'];

// name is a string
// times is an array of an array of integers, length 2. times[0] is the day, times[1] is the time block
function Subject(name, times) {
  this.name = name;
  this.times = times;
}

subjects.push(new Subject("AP Physics", [[1, 2], [3, 4]]), new Subject("AP Chem", [[0, 1], [2, 3]]))

console.log(subjects.find(function (sub) {
  return sub.name === "AP Physics"
}).times)

function gt(ind) {
  var hour = (ind + 7) % 12; 
  if (hour === 0) hour = 12;
  return hour + ":30";
}

function generateGrid() {

  var row = $('<div></div>').attr('class', 'row');
  row.append($('<div></div>').attr('class', 'timecell'));
  for (var j = 0; j < 6; j++) {
    var cell = $('<div></div>').attr('class', 'col letterday').html(days[j]);
    row.append(cell)
  }

  $('#t').append(row);

  for (var i = 0; i < 9; i++) {
    row = $('<div></div>').attr('id', 'row-' + i).attr('class', 'row' + (i%2===0?' even':' odd'));
    row.append($('<div></div>').attr('class', 'timecell').html(gt(i)))
    for (var j = 0; j < 6; j++) {
      var cell = $('<div></div>').attr('id', i + "-" + j).attr('class', 'col cell');
      row.append(cell)
    }
    $('#t').append(row);
  }
}

function generateMenu() {
  
}

generateGrid()
