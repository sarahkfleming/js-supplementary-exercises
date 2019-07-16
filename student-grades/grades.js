/*
Loop over an array of student grades (values from 50-100) and keep track of how many students get each grade in an object named grades.

A score of 50-60 is an F
A score of 61-70 is a D
A score of 71-80 is a C
A score of 81-90 is a B
A score of 91-100 is an A
Start with array of random scores in your JavaScript
*/

const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60]
const grades = {
  A: 0,
  B: 0,
  C: 0,
  D: 0,
  F: 0,
}

for (let i = 0; i < scores.length; i++) {
  /*
    If the score is greater than 90, increment grades.A by 1.

    You can use a series of `if/then` blocks, but you could
    also achieve this with a switch statement.
  */
  switch (true) {
    case scores[i] > 90:
      grades.A += 1
      break;
    case scores[i] > 80:
      grades.B += 1
      break;
    case scores[i] > 70:
      grades.C += 1
      break;
    case scores[i] > 60:
      grades.D += 1
      break;
    case scores[i] > 50:
      grades.F += 1
      break;
    default:
      console.log("If this shows, there's an error")
  }
}

//Use console.info() to output the following criteria to the browser console.

// How many of each grade? Accomplish this with a for..in loop.
for (const letterGrade in grades) {
  const gradeNumbers = grades[letterGrade];
}
console.info(grades)

// What is the lowest score? Sort the array and find out.
scores.sort()
console.info(scores[0])

// What is the highest score?
scores.reverse()
console.info(scores[0])

// Which grade had the most students achieve it? Use an if statment, and a currentGradeCount variable, in your for..in loop to see if the current grade's value is higher than the last one.



// Which grade had the fewest students achieve it?

/*
NOTES
----------------------------------------------------------------
Numeric Sort
By default, the sort() function sorts values as strings.
This works well for strings ("Apple" comes before "Banana").
However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
Because of this, the sort() method will produce incorrect result when sorting numbers.
You can fix this by providing a compare function:

var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
*/