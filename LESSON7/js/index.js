// Написать функцию, которая принимает массив чисел, а возвращает сумму четных положительных чисел

/* function sumPositiveIntFromArr(arr) {
  return arr.reduce((sum, value) => {
    if (value > 0 && value % 2 === 0) {
      return (sum += value);
    }
    return sum;
  }, 0);
}

let testArr1 = [-1, 2, 5, -10, 10, 11];
 */

//Написать функцию которая принимает n аргументов а в результате возвращаетс сумму всех четных. Используем цикл for of

/* function sumElements() {
  let sum = 0;
  for (const arg of arguments) {
    sum += arg % 2 === 0 ? arg : 0;
  }
  return sum;
} */
