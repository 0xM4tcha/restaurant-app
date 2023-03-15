import API_ENDPOINT from '../globals/api-endpoint.js';
import axios from 'axios';

class RestaurantSource {

  static async listRestaurant() {
    const { data: { restaurants } } = await axios.get(API_ENDPOINT.GET_LIST_RESTAURANT);
    return restaurants;
  }

  static async detailRestaurant(id) {
    const response = await axios.get(API_ENDPOINT.GET_DETAIL_RESTAURANT(id));
    return response;
  }
}

export default RestaurantSource;
