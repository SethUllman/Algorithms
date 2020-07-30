const rotateMatrix = require('./1.7.js');

const image = [[1,2,3],
               [4,5,6],
               [7,8,9]];

const result = [[7,4,1],
                [8,5,2],
                [9,6,3]];

test('expect image to rotate clockwise 90 degrees', () => {
  expect(rotateMatrix(image)).toEqual(result);
});

test('expect rotateMatrix to rotate matrix', () => {
  expect(rotateMatrix(image)).not.toEqual(image);
});