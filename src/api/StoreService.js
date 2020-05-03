import AuthService from './AuthService';
import Config from '../config';

export default class StoreService {
  static getStores() {
    return AuthService.getToken()
      .then((token) =>
        fetch(`${Config.SERVER_URL}/api/stores/`, {
          method: 'GET',
          headers: {
            Authorization: `bearer ${token}`,
          },
        }),
      )
      .then((response) => response.json())
      .then((json) => json);
  }
  static placePreflightOrder(storeID, itemID, options) {
    return AuthService.getToken()
      .then((token) => {
        const body = {
          store: storeID,
          items: [
            {
              item: itemID,
              options,
            },
          ],
        };
        console.log(body);
        console.log(JSON.stringify(body));
        return fetch(`${Config.SERVER_URL}/api/orders/`, {
          method: 'POST',
          headers: {
            Authorization: `bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        });
      })
      .then((response) => response);
  }
}
