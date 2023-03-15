import FavoriteRestaurantsIdb from "../../data/favorite-restaurants-idb.js";
import { createRestaurantItemTemplate } from "../templates/template-creator.js";

const Favorite = {
  async render() {
    return `
      <div class="content">
        <h3>Favorite Restaurants</h3>
        <div id="restaurants" class="restaurants">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantsIdb.getAllRestaurants();
    const restaurantContainer = document.querySelector('#restaurants');
    
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;
