import { select, templates } from './setting.js';

class Products {
  constructor(productsData) {
    const thisProduct = this;
    thisProduct.data = productsData;

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

    for (const product of thisProduct.data) {
      thisProduct.dom.productList.innerHTML += templates.cartProduct(product);
    }
  }
}

export default Products;