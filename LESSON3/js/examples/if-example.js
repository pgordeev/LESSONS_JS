const segment1 = 5;
const segment2 = 8;
const segment3 = 12;

let tmp = segment1; //5

console.log("Подсчет наибольшего отрезка из трех");

if (tmp > segment1) {
  tmp = segment2;
}
console.log("Длина наибоьшего сегмента = ", tmp);
