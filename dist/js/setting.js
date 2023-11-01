export const select = {
  templateOf: { 
    product: '#template-product',
  },
  product: {
    productList: '.products-list',
  },
  containerOf: {
    pages: '#pages',
  },
  navigation: {
    links: '.navigation-pages a',
  },
};

export const classNames = {
  active: 'active',
  home: 'home',
  contact: 'contact',
};

export const templates = {
  cartProduct: Handlebars.compile(document.querySelector(select.templateOf.product).innerHTML),
};