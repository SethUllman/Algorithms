var isValid = function (s) {
  let stack = [];
  const opening = ["(", "[", "{"];
  const closing = [")", "]", "}"];

  let chars = s.split('');
  for (let i = 0; i < chars.length; i++) {
    let char = s[i];
    if (opening.includes(char)) {
      stack.push(char);
      continue;
    } else {
      let next = stack[stack.length - 1];
      if (char == ")" && next == "(" ||
        char == "]" && next == "[" ||
        char == "}" && next == "{") {
        stack = stack.slice(0, stack.length - 1);
      } else {
        return false;
      }
    }
  }

  return stack.length == 0;
};