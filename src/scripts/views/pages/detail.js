import RestaurantSource from '../../data/restaurant-source.js';
import UrlParser from '../../routes/url-parser.js';
import { createRestaurantDetailTemplate, createLikeButtonTemplate } from '../templates/template-creator.js';
import LikeButtonInitiator from '../../utils/like-button-initiator.js';

const Detail = {
  async render() {
    return `
      <div id="restaurant-detail" class="restaurant-detail"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant-detail');
    const likeButtonContainer = document.querySelector('#likeButtonContainer');

    
    likeButtonContainer.innerHTML = createLikeButtonTemplate();
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant.data.restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: restaurant.data.restaurant,
    });
  },
};

export default Detail;
