'use strict';

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const wrapper = document.querySelector('.wrapper');
const hearts = wrapper.querySelectorAll('.heart');

/* hearts.forEach((item) => {
  console.log(item);
});
 */

const oneHeart = document.querySelector('.heart');
/* box.style.backgroundColor = 'blue';
box.style.width = '500px'; */
box.style.cssText = `background-color: blue; width: 500px`;
btns[1].style.borderRadius = '100%';
circles[1].style.backgroundColor = 'red';

/* for (let i = 0; i < hearts.length; i++) {
  hearts[i].style.backgroundColor = 'blue';
} */

hearts.forEach((item) => {
  item.style.backgroundColor = 'black';
});

const div = document.createElement('div');
// const text = document.createTextNode('Тут был я');

div.classList.add('black');
// document.body.append(div);

wrapper.append(div);
// wrapper.appendChild(div);

// wrapper.prepend(div);

// hearts[0].before(div);
// wrapper.insertBefore(div, hearts[0]);

// hearts[0].after(div);

// circles[0].remove();

// hearts[0].replaceWith(circles[0]);

div.innerHTML = `<h2>Hello World</h2>`;
// div.textContent = `Hello`;
div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>'); //beforebegin, afterbegin, beforeend, afterend
