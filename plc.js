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

function generate() {
  for (var i = 0; i < 8; i++) {
    var row = $('<tr></tr>').attr('id', 'row-' + i);
    for (var j = 0; j < 6; j++) {
      var cell = $('<td></td>').attr('row', i).attr('column', j);
    }

    $('table').append(row);
  }
}