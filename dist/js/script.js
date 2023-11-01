import Products from './Products.js'; 

const app = {
  initPages: function() {
    const thisApp = this;

    thisApp.pages = document.querySelector('#pages').children;
    thisApp.navLinks = document.querySelectorAll('.navigation-pages a');
    
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
      page.classList.toggle('active', page.id == pageId || pageId == 'home' && page.id != 'contact');
    }
  },

  init: function() {
    new Products();
    app.initPages();
  },
};

app.init();