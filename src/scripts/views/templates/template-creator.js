import CONFIG from '../../globals/config.js';

const createRestaurantItemTemplate = (restaurant) => {
  const { id, name, pictureId, city, rating } = restaurant;
  const image = `${CONFIG.GET_SMALL_IMAGE}${pictureId}`;
  const restaurantItem = `
    <restaurant-item
      tabindex="${id}"
      id="${id}"
      name="${name}"
      image="${image}"
      city="${city}"
      rating="${rating}"
    >
    </restaurant-item>
  `;
  return restaurantItem;
};

const createRestaurantDetailTemplate = (restaurant) => {
  const {
    name,
    pictureId,
    address,
    city,
    description,
    menus: { drinks, foods },
    customerReviews
  } = restaurant;
  const image = `${CONFIG.GET_SMALL_IMAGE}${pictureId}`;
  const restaurantItem = `
    <h1>Restaurant Detail</h1>
    <div class="restaurant-info">
      <div>
        <h2>${name}</h2>
        <p>${description}</p>
        <br/>
        <p>${city}</p>
        <p>${address}</p>
      </div>
      <img title="restaurant-image" class="restaurant-image" src="${image}" alt="restaurant-image">
    </div>
    <h2>Our Menu</h2>
    <div class="menu-container">
      <article>
        <h3>Foods:</h3>
        <ul>
          ${foods.map((food) => {
            return `<li>${food.name}</li>`
          }).join('')}
        </ul>
      </article>
      <article>
        <h3>Drinks:</h3>
        <ul>
          ${drinks.map((drink) => {
            return `<li>${drink.name}</li>`
          }).join('')}
        </ul>
      </article>
    </div>
    <h2>Customer Reviews</h2>
    <div class="reviews-container">
      ${customerReviews.map(({name, date, review}) => {
        return `
          <review-item
            name="${name}"
            date="${date}"
            review="${review}"
          >
          </review-item>
        `
      }).join('')}
    </div>
  `;
  return restaurantItem;
};

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;
 
const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate
};
