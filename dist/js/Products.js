import { products } from './data.js';
import { select, templates } from './setting.js';

class Products {
  constructor() {
    const thisProduct = this;

    thisProduct.getElements();
    thisProduct.renderProducts();
  }

  getElements() {
    const thisProduct = this;

    thisProduct.dom = {};
    thisProduct.dom.productList = document.querySelector(select.product.productList);
  }

  renderProducts() {
    const thisProduct = this;

    for (const product of products) {
      thisProduct.dom.productList.innerHTML += templates.cartProduct(product);
    }
  }
}

export default Products;