class RestaurantItem extends HTMLElement {
  constructor() {
    super();
  }
 
  connectedCallback() {
    this.id = this.getAttribute('id') || null;
    this.name = this.getAttribute('name') || null;
    this.city = this.getAttribute('city') || null;
    this.image = this.getAttribute('image') || null;
    this.location = this.getAttribute('location') || null;
    this.rating = this.getAttribute('rating') || null;
 
    this.innerHTML = `
      <a href="/#/detail/${this.id}" title="restaurant-item" id="restaurant-item" class="restaurant-item">
        <p class="title">${this.name}, <span>${this.city}</span></p>
        <img title="restaurant-image" class="restaurant-image" src="${this.image}" alt="restauran-image">
        <p>Rating
          <span id="rating" style="color: ${this.rating < 4 ? '#ff7400' : '#02ac02'}">
            ${this.rating}
          <span>
        </p>
      </a>
    `;
  }
}
 
customElements.define('restaurant-item', RestaurantItem);
