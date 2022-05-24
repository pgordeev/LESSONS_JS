//1

/* const num = 42;
let result;
if (num > 20) {
  result = 'More than 20';
} else {
  result = 'Less than 20';
} */

const result = num > 20 ? 'More than 20' : 'Less than 20';

//2

let variable; //undefined
let variable2;
/* if (variable !== null && variable !== undefined && variable !== '') {
  variable2 = variable;
} else {
  variable2 = 'some value';
} */
variable2 = variable || 'some value';

//3

/* let x
let y
let z=42 */
let x,
  y,
  z = 42;

//4

let isSame = true;
if (isSame === true) {
}
if (isSame) {
}

//5

const names = ['Igor', 'Elena', 'Olga'];
for (let i = 0; i < names.length; i++) {
  //names[i]
}

// получаем переменные
for (let name of names) {
  // name
}
// получаем индексы
for (let index in names) {
  //index
}

// callback функцию можно описать отдельно
function logArrayItems(el, index, array) {
  console.log(`names[${index}] = ${el}`);
}
names.forEach(logArrayItems);

//6
/* let port;
if (process.env.PORT) {
  port = process.env.PORT;
} else {
  port = 4200;
} */
const port = process.env.PORT || 4200;

//7

/* for (let i = 0; i < 1000000; i++) {}
for(let i=0; i<10e6; i++){} */

//8
const a = 1,
  b = 2;
const myObj = { a, b };

//9
setTimeout(function () {
  console.log('After 2 sec'), 2000;
});

setTimeout(() => console.log('After 2 sec'), 2000);

//10
/* function rgb(r, g, b) {
  if (r===undefined){
    r=0
  }
if (g===undefined){
  g=255
}
return `rgb(${r}, ${g}, ${b})`
} */
const rgb = (r = 0, g = 255, b) => `rgb(${r}, ${g}, ${b})`;

//11 Создание переменных из ключей объекта
/* const alert = window.alert
const confirm = window.confirm */

const { alert, prompt, confirm } = window;

//12
const arr = [1, 2, 3];
const nums = [4, 5, 6, ...arr]; //спред ... можно помещать в любую точку массива

//13
console.log(Math.floor(9.7) === 9);
console.log(~~9.7 === 9);

//14 Возведение в степень
console.log(Math.pow(2, 3));
console.log(Math.pow(2, 4));
console.log(Math.pow(2, 5));

console.log(2 ** 3);

//15
const int = parseInt('42'); // +'42'
const float = parseFloat('42.42');

//16
if ([1, 2, 3].indexOf(3) > -1) {
  //найдено
}
if (~[1, 2, 3].indexOf(3)) {
  //найдено
}
//17 Объект в виде массива
const car = {
  model: 'Ford',
  year: 2019,
  color: 'red',
};
console.log(Object.entries(car)); //все
console.log(Object.values(car)); //только занчения
console.log(Object.keys(car)); //только ключи
