// Homework 13.05
// Реализовать функцию, которая заменяет в строке str,
// все вхождения подстроки ﬁnd, на подстроку replace

/**
 * Проверяет строку на наличие заданных подстрок 'find' и меняет их на 'replace'
 * @param {String} str исходная строка
 * @param {String} find искомыая подстрока (-и)
 * @param {String} replace замена для подстроки
 * @return {String} измененая строка, где все 'find' заменены на 'replace'
 */

function changeFindToReplace(str, find, replace) {
  if (str.indexOf(find) == -1) {
    return alert(`Подстрока ${find} в исходной строке не найдена`);
  }
  do {
    str = str.replace(find, replace);
  } while (str.indexOf(find) > -1);
  return str;
}
