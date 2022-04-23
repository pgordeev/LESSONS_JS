/* function stringClean(s) {
  let newS = '';
  for (i = 0; i <= s.length; i++) {
    if (typeof s[i] != Number) {
      newS = newS + s[i];
    }
  }
  return newS;
}
console.log(stringClean('33423423')); */

/* function stringClean(s) {
  let newS = '';
  for (const i of s) {
    if (typeof i !== Number) {
      newS = newS + s[i];
    }
  }
  return newS;
}
console.log(stringClean('33ggjasdsa423423'));

 */

/* function spinWords(string) {
  let tmpArr = string.split(' ');
  tmpArr.forEach((element) => {
    if (element.length >= 5) {
      element.reverse;
    }
  });
  return tmpArr;
}
console.log(spinWords('F, fdsdsdd u')); */
