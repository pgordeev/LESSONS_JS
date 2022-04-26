/* function sayHi(name) {
  name = name ? console.log(`HI, ${name}`) : console.log(`HI, Guest`);
} */

/* function power(value, pow = 1) {
  const result = Math.pow(value, pow);
  if (isNaN(result)) {
    throw new Error(`Введены не верные данные`);
  }
  return result;
} */

function averageFromArr(anyArr) {
  return anyArr.map((i) => (x += i), (x = 0)).reverse()[0] / anyArr.length;
}

/* const consoleRepeat = (str, count) => {
  for (let i = 1; i <= count; i++) {
    console.log(str);
  }
}; */

/* const isVowel = (letter) => {
  const vowelLetters = 'ауоыэюяёиеaeiouy';
  return vowelLetters.includes(letter.toLowerCase))
  }; */

const isPalindrom = (str) => {
  return str.split('').reverse().join('') == str;
};
