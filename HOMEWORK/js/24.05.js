/* 1. Используя замыкания написать счетчик, который можно как инкрементировать и декрементировать (за направление счетчика будет отвечать 2ой, опциональный, параметр) 
За приращение будет отвечать первый параметр
За сброс будет третий, опциональный, параметр)*/

/**
 *
 * @param {Number} start стартовое значение
 * @param {String} route должен принимать "-", если снижаем значение, "+", если повышаем, необязательный, по умолчанию === "+"
 * @param {Number} reset значение, при достижении которого счетчик принимает значение start, не обязательный параметр
 * @param {Number} step шаг
 *
 * @returns при каждом вызове функции изменяет значение старт на степ с учетом значения route
 */

function counter() {
  let count = 0;
  return function (start, step, route = '+', reset = null) {
    if (reset === null) {
      if (route === '+') {
        count++;
        return (start += step);
      } else {
        count++;
        return (start -= step);
      }
    } else {
      if (route === '+' && start <= reset) {
        count++;
        return (start += step);
      } else if (route === '-' && start >= reset) {
        count++;
        return (start -= step);
      } else if (route === '+' && start >= reset) {
        return (start = start - step * count);
      } else if (route === '-' && start <= reset) {
        return (start = start + step * count);
      }
    }
  };
}

const counterClosure = counter();
