import Products from './Products.js'; 
import { classNames, select, settings } from './setting.js';

const app = {
  initPages: function() {
    const thisApp = this;

    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.navigation.links);
    
    thisApp.activatePages(thisApp.navLinks[0].getAttribute('href').replace('#', ''));

    for(let link of thisApp.navLinks) {
      link.addEventListener('click', function(event) {
        const clickedElement = this;
        event.preventDefault();

        const id = clickedElement.getAttribute('href').replace('#', '');

        thisApp.activatePages(id);
      });
    }
  },

  activatePages: function(pageId) {
    const thisApp = this;

    for (let page of thisApp.pages) {
      page.classList.toggle(
        classNames.active, page.id == pageId || 
        pageId == classNames.home && page.id != classNames.contact
      );
    }
  },

  initData: function () {
    const thisApp = this;

    thisApp.data = {};

    const url = settings.db.url + '/' + settings.db.products;

    fetch(url)
      .then(function(rawResponse) {
        return rawResponse.json();
      })

      .then(function(parsedResponse) {

        thisApp.data.products = parsedResponse;

        new Products(thisApp.data.products);
      });
  },

  init: function() {
    const thisApp = this;

    thisApp.initData();
    thisApp.initPages();
  },
};

app.init();