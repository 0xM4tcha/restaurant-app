import UrlParser from '../routes/url-parser.js';
import routes from '../routes/routes.js';
import DrawerInitiator from '../utils/drawer-initiator.js';

class App {
  constructor({button, drawer, header, content}) {
    this._button = button;
    this._drawer = drawer;
    this._header = header;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
    const skipLinkElem = document.querySelector('.skip-link');    
    skipLinkElem.addEventListener('click', (event) => {      
      event.preventDefault();
      document.querySelector('#main-content').focus();
    });
  }
}

export default App;
