const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

// rotate matrix 90 degrees
function rotate(source) {
  let rotated = source[0].map(_ => []);

  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < source[i].length; j++) {
      const value = source[i][j];
      rotated[j][source.length - 1 - i] = value;
    }
  }

  return rotated;
}

function prettyPrint(arr) {
  arr.forEach(element => {
    console.log(element);
  });
}


prettyPrint(rotate(matrix));
