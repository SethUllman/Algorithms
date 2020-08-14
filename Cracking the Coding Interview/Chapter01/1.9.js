//Assume you have a method isSubstring which checks if one word is a substring 
//of another. Given two string, s1 and s2, write code to check if s2 is a rotation 
//of s1 using only one call to isSubstring(e.g.,"waterbottle" is a rotation of "erbottlewat").

const stringRotation = (s1, s2) => {
  if(s1.length != s2.length) return false;
  let string1 = s1;

  for (let i = 0; i < s1.length; i++){
    if (string1 != s2) {
      string1 = string1.split('');
      string1.push(string1.shift());
      string1 = string1.join('');
    } else {
      return true;
    }
  }

  return false;
}

module.exports = stringRotation;