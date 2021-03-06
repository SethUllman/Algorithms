function highAndLow(numbers) {
  numbers = numbers.split(' ');
  let highest = parseInt(numbers[0]);
  let lowest = highest;

  numbers.forEach((num) => {
    let newNum = parseInt(num);
    if (newNum > highest) highest = newNum;
    if (newNum < lowest) lowest = newNum;
  });
  return `${highest} ${lowest}`
}

function friend(friends) {
  let filteredFriends = [];

  friends.forEach((friend) => {
    if (friend.length === 4) filteredFriends.push(friend);
  });

  return filteredFriends;
}

function validatePIN(pin) {
  //return true or false
  if ((pin.length === 4 || pin.length === 6) && pin >= 0 && pin % 1 === 0) return true;

  return false;
}