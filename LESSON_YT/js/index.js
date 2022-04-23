/* setTimeout(function () {
  console.log('Отложенное сообщение');
}, 2000);

function multByFactor(value, multiplier = 1) {
  return value * multiplier;
}
console.log(multByFactor(10, 2));
console.log(multByFactor(5)); */

//НЕЯВНЫЙ ВОЗВРАТ ОБЪЕКТА
/* const newPost = (post, addedAt = Date()) => ({
  ...post,
  addedAt,
});
const firstPost = {
  id: 1,
  author: 'Pavel',
};

console.table(newPost(firstPost)); */

// TRY CATCH
/* const fnWithError = () => {
  throw new Error('some error');
};

try {
  fnWithError();
} catch (error) {
  console.error(error);
  console.log(error.message);
}
console.log('Continue...');
 */

//Массивы
/* const myArr = [1, 2, 3];
const myArr2 = new Array(1, 2, 3);
const myArr3 = myArr;
console.log(myArr, myArr2, myArr === myArr3, myArr.length);

myArr.push(2, 3, 4, 5, 6, 6, 7); */ // добавление в конец массива

// const removedEl = myArr.pop(); //pop - удаляет последний элемент массива и возвращает его
// myArr.unshift(0); // добавление в начало массива
// myArr.shift(); //удаляет первый элемент и возращает его

/* const myArr4 = [1, 2, 3];
myArr4.forEach((el) => console.log(el * 2)); */

// MAP - создает новый массив на основе  резульатов callback функции
// const newArray = myArr4.map((el) => el * 3);
/* const newArray = myArr4.map((el) => {
  return el * 3;
}); */

//Деструктуризация в объектах, массивах, функциях
/* const userProfile = {
  name: 'Pavel',
  commentsQty: 23,
  hasSignedAgreement: false,
}; */
/* const { name, commentsQty } = userProfile;
const { hasSignedAgreement } = userProfile; */

/* const fruits = ['Apple', 'Banana'];
const [fruitOne, fruitTwo] = fruits; */

// Функции

/* const userInfo = ({ name, commentsQty }) => {
  if (!commentsQty) {
    return `User ${name} has no comments`;
  }
  return `User ${name} has ${commentsQty} comments`;
};
userInfo(userProfile); */

/* let num = 11224343355644;

const tmpArr = [...String(num)];
// console.log(tmpArr);
function findLuckyNum(tmpArr) {
  let result = {};
  for (let i = 0; i < tmpArr.length; i++) {
    if (result[tmpArr[i]]) {
      result[tmpArr[i]]++;
    } else {
      result[tmpArr[i]] = 1;
    }
  }
  // console.log(result);
  let res = 0;
  for (let key in result) {
    if (result[key] == key) {
      res = Math.max(res, key);
    }
  }
  return res;
}
console.log(findLuckyNum(tmpArr)); */

/* let num = 11224343355644;
const arr1 = Array.from(`${num}`);
const arr2 = [];
arr1.forEach((element) => {
  const arr = arr1.filter((el) => el === element);
  `${arr.length}` === element && arr2.push(element);
});
arr2.sort((a, b) => b - a);
console.log(+arr2[0]);  */

/* const answer = Array.from(`${num}`).reduce((acc, el, i, arr) => {
  acc = [];
  arr.forEach((element) => {
    const arrNew = arr.filter((el) => el === element);
    `${arrNew.length}` === element && acc.push(element);
  });
  return +acc.sort((a, b) => b - a)[0];
}, 0);

console.log(answer); */

arr = { 1: 'one', null: null, string: 'bbb' };
console.log(Object.keys(arr).concat(5, '5'));
