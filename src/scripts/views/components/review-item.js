class ReviewItem extends HTMLElement {
  constructor() {
    super();
  }
 
  connectedCallback() {
    this.name = this.getAttribute('name') || null;
    this.date = this.getAttribute('date') || null;
    this.review = this.getAttribute('review') || null;
 
    this.innerHTML = `
      <div id="review-item" class="review-item">
        <div class="review-header">
          <p>${this.name}</p>
          <p>${this.date}</p>
        </div>
        <p class="review-body">${this.review}</p>
      </div>
    `;
  }
}
 
customElements.define('review-item', ReviewItem);
