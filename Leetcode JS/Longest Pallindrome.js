var longestPalindrome = function (s) {
  if (s.length == 1) return s;

  let subs = [];

  for (let i = 0; i < s.length + 1; i++) {
    for (let j = i + 1; j < s.length + 1; j++) {
      if (!subs.includes(s.slice(i, j))) subs.push(s.slice(i, j));
    }
  }

  let longest = "";

  for (let sub = 0; sub < subs.length; sub++) {
    let current = subs[sub];
    if (current.length > longest.length) {
      let reversed = current.split("").reverse().join("");
      if (reversed == current) {
        longest = current;
      }
    }
  }
  console.log(longest);
  return longest;
};

longestPalindrome('aecabac');
longestPalindrome("civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth");