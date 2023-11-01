import Products from './Products.js'; 
import { classNames, select } from './setting.js';

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

  init: function() {
    new Products();
    app.initPages();
  },
};

app.init();