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

// Задача про среднее время ожидания ХЗ пока как решить
/* function barista(coffees) {
  let tmpArr = [coffees[0]];
  let result = null;
  let tmpArr2 = [];
  coffees = coffees.sort((a, b) => a - b);
  // tmpArr = coffees.map((i) => (x += i), (x = 0));
  let newArr = coffees[0];
  for (let i = 1; i <= coffees.length - 1; i++) {
    tmpArr.push(coffees[i] + coffees[i - 1] + 2);
  }
  console.log(tmpArr);
  return newArr;
} */

//Задача про Solve("*'&ABCDabcde12345") = [4,5,5,3] uppercase, lower, num, spec

function solve(s) {
  const res = s.split('');
  for (let i = 0; i <= s.length; i++) {}
  return res;
}

let total = 0;
[1, 2, 3].forEach(function (num) {
  total += num;
});
