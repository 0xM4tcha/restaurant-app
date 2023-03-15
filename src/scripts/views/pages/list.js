import RestaurantSource from '../../data/restaurant-source.js';
import { createRestaurantItemTemplate } from '../templates/template-creator.js';

const List = {
  async render() {
    return `
      <div class="content">
        <h3>List Restaurant</h3>
        <div id="restaurants" class="restaurants">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.listRestaurant();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default List;
