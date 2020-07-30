//Given an image represented by an N x N matrix, where each pixel in the image 
//is represented by an integer, write a method to rotate the image by 90 degrees. 
//Can you do this in place?

const rotateMatrix = (image) => {
  let rotated = [];

  for(let i = 0; i < image.length; i++){
    let row = [];
    for(let j = image[i].length-1; j >= 0; j--){
      row.push(image[j][i]);
    }
    rotated.push(row);
  }

  return rotated;
}

module.exports = rotateMatrix;
