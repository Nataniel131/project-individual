import { products } from './data.js';

const tplHelloSource = document.querySelector('#template-product').innerHTML;
const tplHello = Handlebars.compile(tplHelloSource);
const targetElement = document.querySelector('.products-list');

for (const product of products) {
  targetElement.innerHTML += tplHello(product);
}

const app {};