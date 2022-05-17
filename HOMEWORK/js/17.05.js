/* 1. Написать функцию, которая будет принимать массив чисел, и будет убирать
повторяющиеся значения из переданного массива, в качестве результата
возвращать новый массив с уникальными значениями из исходного. */

const testArr = [-1, 1, 1, 3, 4, -2, -2, 5, 5, 5, 6, 6, 7, 8, 8, 9];

//используем метод filter и indexOf

function getUniqElFromArr(arr) {
  const uniqArr = arr.filter((el, idx, arr) => arr.indexOf(el) === idx);
  return uniqArr;
}
console.log(getUniqElFromArr(testArr));

// но самый простой способ использовать специальный объект Set. Он всегда возращает только уникальные значения

const setArr = [...new Set(testArr)];

/* 2. Написать функцию которая будет принимать два массива, и будет сравнивать
их, если они идентичны (элементы совпадают по значению и по индексу) то
функция возвращает true, в противном случае false. */

const testArr1 = testArr;
const testArr2 = [-1, 1, 1, 3, 4, -2, -2, 5, 5, 5, 6, 6, 7, 8, 8, 9].reverse();
const testArr3 = [-1, 1, 1, 3, 4, -2, -2, 5, 5, 5, 6, 6, 7, 8, 8, 9];

//

function isArraysEqual(arr1, arr2) {
  //сразу проверка на длины
  if (arr1.length !== arr2.length) return false;
  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}
// можно проще с использованием JSON.stringify, но думается мне, будут проблемы с вложенными объектами в которые вложены объекты (не стал проверять пока)

function isArraysEqualWithJSON(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}

console.log(
  `Сравниваем разные массивы: ` + isArraysEqual(testArr1, testArr2),
  `Сравниваем одинаковые массивы: ` + isArraysEqual(testArr1, testArr3)
);
console.log(
  `Сравниваем разные массивы: ` + isArraysEqualWithJSON(testArr1, testArr2),
  `Сравниваем одинаковые массивы: ` + isArraysEqualWithJSON(testArr1, testArr3)
);

/* 3. Написать функцию которая будет принимать два массива, и в качестве
результата будет возвращать только те значения которые есть и в первом и во
втором массиве. */

const testArr4 = [1, 2, 3, 4, 5, 6];
const testArr5 = [4, 5, 6, 7, 8, 9];

function getArrWOUniqVal(arr1, arr2) {
  const newArr = [];
  for (const item of arr1) {
    if (arr2.includes(item)) newArr.push(item);
  }
  return newArr;
}
console.log(getArrWOUniqVal(testArr4, testArr5));
