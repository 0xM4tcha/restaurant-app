class NavigationStore extends HTMLElement {
  constructor() {
    super();
  }
 
  connectedCallback() {
    this.idnav = this.getAttribute('idnav') || null;
 
    this.innerHTML = `
      <nav>
        <a href="/" title="home">Home</a>
        <a href="/#/favorite/" title="favorite">Favorite</a>
        <a href="https://www.linkedin.com/in/arif-hidayat-394547166/" title="about-us" target="_blank" rel="noopener noreferrer">
          About Us
        </a>
      </nav>
    `;
  }
}
 
customElements.define('navigation-store', NavigationStore);
