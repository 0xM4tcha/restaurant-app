const DrawerInitiator = {
  init({ button, drawer }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });
  },
 
  _toggleDrawer(event, drawer) {
    const hamburgerButtonElement = document.getElementById('hamburger-button');
    event.stopPropagation();
    hamburgerButtonElement.innerText = hamburgerButtonElement.innerText === '☰' ? 'x' : '☰';
    drawer.classList[hamburgerButtonElement.innerText === 'x' ? 'toggle' : 'remove']('open');
  },
};
 
export default DrawerInitiator;