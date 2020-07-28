//Implement a method to perform basic string compression using the counts of repeated characters. 
//For example, the string 'aabcccccaaa would become a2b1c5a3. If the compressed 
//string would not become smaller than the original string, your method should return 
//the original string. You can assume the string has only uppercase and lowercase letters(a-z).

const stringCompression = (string) => {
  let compressed = '';
  let currentChar = '';
  let count = 0;
  

  for (let i = 0; i < string.length; i++){
    if (count == 0){
      currentChar = string[i]; 
      compressed += currentChar; 
      count++; 
    } else if(count > 0 && string[i] == currentChar){
      count++;
    } else if(count > 0 && string[i] != currentChar){
      compressed += count; 
      currentChar = string[i]; 
      compressed += currentChar;
      count = 1;
    }

  }
  if(count > 1){
    compressed += count;
  }
  return (string.length <= compressed.length ? string : compressed);

}

module.exports = stringCompression;