// Homework 13.05
// Реализовать функцию, которая заменяет в строке str,
// все вхождения подстроки ﬁnd, на подстроку replace

/**
 * Проверяет строку на наличие заданных подстрок 'find' и меняет их на 'replace'
 * @param {String} str исходная строка (может быть передано как число)
 * @param {String} find искомая подстрока (-и)
 * @param {String} replace замена для подстроки
 * @return {String} измененая строка, где все 'find' заменены на 'replace'
 */

// function changeFindToReplace(str, find, replace) {
//   str = str + '';
//   if (str.indexOf(find) == -1) {
//     return alert(`Подстрока ${find} в исходной строке не найдена`);
//   }
//   //Можно циклом...
//   /* do {
//     str = str.replace(find, replace);
//   } while (str.indexOf(find) > -1); */

//   // ...но replaceAll проще
//   str = str.replaceAll(find, replace);
//   return;
// }

// КОРОТКАЯ ЗАПИСЬ

function changeFindToReplace(str, find, replace) {
  str = str + '';
  return str.indexOf(find) == -1
    ? alert(`Подстрока ${find} в исходной строке не найдена`)
    : (str = str.replaceAll(find, replace));
}
