//There are three types of edits that can be performed on strings: 
//insert a character, remove a character, or replace a character. 
//Given two strings, write a function to check if they are one 
//edit(or zero edits) away.

//EXAMPLE
//pale, ple => true
//pales, pale => true
//pale, bale => true
//pale, bake => false

const oneAway = (str1, str2) => {
  if (str1 == str2) return true;

  //create two queus, one per str
  let edits = 0;
  let queue1 = str1.split('');
  let queue2 = str2.split('');

  //compare the chars being pushed into the queue, allowing for one edit
  if (str1.length < str2.length) {
    //example (pales, pale)
    while(queue1.length > 0 && queue2.length > 0){
      if(queue1[0] != queue2[0]){
        edits++;
        queue2.shift();
      } else {
        queue1.shift();
        queue2.shift();
      }
    }

  } else if(str1.length > str2.length) {
    //example (pal, pale)
    while (queue1.length > 0 && queue2.length > 0) {
      if (queue1[0] != queue2[0]) {
        edits++;
        queue1.shift();
      } else {
        queue1.shift();
        queue2.shift();
      }
    }

  } else {
    //example (pale, bale)
    while (queue1.length > 0 && queue2.length > 0) {
      if (queue1[0] != queue2[0]) {
        edits++;
        queue1.shift();
        queue2.shift();
      } else {
        queue1.shift();
        queue2.shift();
      }
    }
  }

  //return false if there are multiple edits
  if(edits >= 2) return false;
  return true;
}


module.exports = oneAway;