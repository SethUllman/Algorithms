const zeroMatrix = require('./1.8.js');

const testMatrix1 = [
  [1,2,3],
  [4,5,0],
  [0,8,9],
  [10,11,12]
]

const testResult1 = [
  [0,2,0],
  [0,0,0],
  [0,0,0],
  [0,11,0]
]

test("expect zeroMatrix to return a zero'd matrix", () => {
  expect(zeroMatrix(testMatrix1)).toEqual(testResult1)
});

