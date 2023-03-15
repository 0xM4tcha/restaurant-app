import 'regenerator-runtime';
import '../styles/main.scss';
import './views/components/restaurant-item.js';
import './views/components/review-item.js';
import './views/components/navigation-store.js';
import App from './views/app.js';
import swRegister from './utils/sw-register.js';

const app = new App({
  button: document.querySelector('#hamburger-button'),
  drawer: document.querySelector('#navigation-mobile'),
  header: document.querySelector('#app-bar'),
  content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();
  swRegister();
});
