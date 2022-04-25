// Homework 26.04
/* console.log('Проанализировав временной промежуток начиная с
1800 и до 2020 года найти и вывести в консоль:'); */

/* console.log('-Год первого полета человека в
космос и количество итераций которое потребовалось для поиска.'); */
const answer1 = [];
const firstCosmicFly = 1961;

for (let i = 1800; i <= firstCosmicFly; i++) {
  answer1.push(i);
}
console.log(firstCosmicFly, answer1.length);

/* console.log('-Количество високосных годов принадлежащих
данному отрезку и количество итераций которое потребовалось для поиска.'); */

/* Тут я решил немного усложнить и создать фунукцию, которая принимаент два аргумента:
год начальный и год конечный (порядок не важен) и выводит количество високосных годов в промежутке*/

function calcLeapYear(firstYear, lastYear) {
  const leapArr = [];
  if (lastYear < firstYear) {
    [firstYear, lastYear] = [lastYear, firstYear];
  }
  for (let i = firstYear; i <= lastYear; i++) {
    if (i % 4 === 0 && i % 100 !== 0) {
      leapArr.push(i);
    } else if (i % 400 === 0) {
      leapArr.push(i);
    }
  }
  return leapArr.length;
}

console.log(calcLeapYear(1900, 2000));
