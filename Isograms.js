// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

//link https://www.codewars.com/kata/reviews/54cd002407ba21e38f00000f/groups/634192e02bd69a0001c8858f
function isIsogram(str) {
  let fullword = "";
  let repeating = 0;
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) != str.lastIndexOf(str[i])) {
      repeating = 1;
    }
  }
  const x = repeating == 0 ? true : false;
  return x;
}
