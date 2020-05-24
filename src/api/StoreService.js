import AuthService from './AuthService';
import Config from '../config';

class StoreService {
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

const DEFAULT_API_DELAY = 2000;
const wait = (delay = DEFAULT_API_DELAY) =>
  new Promise((resolve) => setTimeout(resolve, delay));

class _MockStoreService {
  constructor() {
    this.orders = [];
    this.stores = [
      {
        _id: '5a0faecad832d9bbb6c1c99f',
        __v: 0,
        name: 'Mojo',
        location: 'Lambton Quay',
        image: 'https://www.dropbox.com/s/n0p88p6y5jyr9fy/mojo.jpg?dl=1',
        menu: [
          {
            title: 'Flat White',
            price: 4.5,
            _id: '5a0faecad832d9bbb6c1c9a5',
            options: [
              {
                id: 'size',
                widget: 'Radio',
                values: [
                  {
                    label: 'S (4oz)',
                    value: 'small',
                  },
                  {
                    label: 'M (6oz)',
                    value: 'medium',
                  },
                  {
                    label: 'L (8oz)',
                    value: 'large',
                  },
                ],
                label: 'Size',
                properties: {
                  prices: {
                    medium: '0.5',
                    large: '1',
                  },
                },
              },
              {
                id: 'strength',
                widget: 'Radio',
                values: [
                  {
                    label: 'Single',
                    value: 'single',
                  },
                  {
                    label: 'Double',
                    value: 'double',
                  },
                  {
                    label: 'Decaf',
                    value: 'decaf',
                  },
                ],
                label: 'Strength',
                properties: {
                  prices: {
                    double: '0.5',
                    decaf: '0.5',
                  },
                },
                validation: {
                  required: true,
                },
              },
              {
                id: 'milk',
                widget: 'Radio',
                values: [
                  {
                    label: 'Full',
                    value: 'full',
                  },
                  {
                    label: 'Trim',
                    value: 'trim',
                  },
                  {
                    label: 'Coconut',
                    value: 'coconut',
                  },
                ],
                label: 'Milk',
                properties: {
                  prices: {
                    coconut: '1',
                  },
                },
              },
              {
                id: 'notes',
                widget: 'Input',
                placeholder: 'E.g. extra hot',
                label: 'Note',
              },
              {
                id: 'quantity',
                widget: 'Incrementer',
                label: '',
                minValue: 1,
                maxValue: 10,
              },
            ],
          },
          {
            title: 'Cappuccino',
            price: 4.5,
            _id: '5a0faecad832d9bbb6c1c9a6',
            options: [
              {
                id: 'size',
                widget: 'Radio',
                values: [
                  {
                    label: 'S (4oz)',
                    value: 'small',
                  },
                  {
                    label: 'M (6oz)',
                    value: 'medium',
                  },
                  {
                    label: 'L (8oz)',
                    value: 'large',
                  },
                ],
                label: 'Size',
                properties: {
                  prices: {
                    medium: '0.5',
                    large: '1',
                  },
                },
              },
              {
                id: 'strength',
                widget: 'Radio',
                values: [
                  {
                    label: 'Single',
                    value: 'single',
                  },
                  {
                    label: 'Double',
                    value: 'double',
                  },
                  {
                    label: 'Decaf',
                    value: 'decaf',
                  },
                ],
                label: 'Strength',
                properties: {
                  prices: {
                    double: '0.5',
                    decaf: '0.5',
                  },
                },
                validation: {
                  required: true,
                },
              },
              {
                id: 'milk',
                widget: 'Radio',
                values: [
                  {
                    label: 'Full',
                    value: 'full',
                  },
                  {
                    label: 'Trim',
                    value: 'trim',
                  },
                  {
                    label: 'Soy',
                    value: 'soy',
                  },
                ],
                label: 'Milk',
                properties: {
                  prices: {
                    soy: 1,
                  },
                },
              },
              {
                id: 'topping',
                widget: 'Radio',
                values: [
                  {
                    label: 'Chocolate',
                    value: 'chocolate',
                  },
                  {
                    label: 'Cinnamon',
                    value: 'cinnamon',
                  },
                  {
                    label: 'Both',
                    value: 'both',
                  },
                ],
                label: 'Topping',
              },
              {
                id: 'notes',
                widget: 'Input',
                placeholder: 'E.g. extra hot',
                label: 'Note',
              },
              {
                id: 'quantity',
                widget: 'Incrementer',
                label: '',
                minValue: 1,
                maxValue: 10,
              },
            ],
          },
          {
            options: [
              {
                id: 'size',
                widget: 'Radio',
                values: [
                  {
                    label: 'S (4oz)',
                    value: 'small',
                  },
                  {
                    label: 'M (6oz)',
                    value: 'medium',
                  },
                  {
                    label: 'L (8oz)',
                    value: 'large',
                  },
                ],
                label: 'Size',
                properties: {
                  prices: {
                    medium: '0.5',
                    large: '1',
                  },
                },
              },
              {
                id: 'strength',
                widget: 'Radio',
                values: [
                  {
                    label: 'Single',
                    value: 'single',
                  },
                  {
                    label: 'Double',
                    value: 'double',
                  },
                  {
                    label: 'Decaf',
                    value: 'decaf',
                  },
                ],
                label: 'Strength',
                properties: {
                  prices: {
                    double: '0.5',
                    decaf: '0.5',
                  },
                },
              },
              {
                id: 'sugars',
                widget: 'Radio',
                values: [
                  {
                    label: 'None',
                    value: 'none',
                  },
                  {
                    label: 'One',
                    value: 'one',
                  },
                  {
                    label: 'Two',
                    value: 'two',
                  },
                ],
                label: 'Sugars',
              },
              {
                id: 'notes',
                widget: 'Input',
                placeholder: 'E.g. extra hot',
                label: 'Special Instructions',
              },
              {
                id: 'quantity',
                widget: 'Incrementer',
                label: '',
                minValue: 1,
                maxValue: 10,
              },
            ],
            title: 'Long Black',
            price: 3.5,
            _id: '5a0faecad832d9bbb6c1c9a0',
          },
        ],
      },
      {
        _id: '5a0faecad832d9bbb6c1c9ae',
        __v: 0,
        name: 'Shaky Isles',
        location: 'Wellington Airport',
        image: 'https://www.dropbox.com/s/e3t66bi129bdt3u/shakyisles.jpg?dl=1',
        menu: [
          {
            options: [
              {
                variations: [
                  {
                    name: 'S',
                    price: 0,
                    _id: '5a0faecad832d9bbb6c1c9b8',
                  },
                  {
                    name: 'M',
                    price: 0.5,
                    _id: '5a0faecad832d9bbb6c1c9b7',
                  },
                  {
                    name: 'L',
                    price: 1,
                    _id: '5a0faecad832d9bbb6c1c9b6',
                  },
                ],
                name: 'Size',
                _id: '5a0faecad832d9bbb6c1c9b5',
              },
              {
                variations: [
                  {
                    name: 'Regular',
                    price: 0,
                    _id: '5a0faecad832d9bbb6c1c9b4',
                  },
                  {
                    name: 'Trim',
                    price: 0,
                    _id: '5a0faecad832d9bbb6c1c9b3',
                  },
                  {
                    name: 'Coconut',
                    price: 1,
                    _id: '5a0faecad832d9bbb6c1c9b2',
                  },
                  {
                    name: 'Almond',
                    price: 1,
                    _id: '5a0faecad832d9bbb6c1c9b1',
                  },
                ],
                name: 'Milk',
                _id: '5a0faecad832d9bbb6c1c9b0',
              },
            ],
            title: 'Flat White',
            price: 4.5,
            _id: '5a0faecad832d9bbb6c1c9af',
          },
        ],
      },
    ];
    this.getStores = this.getStores.bind(this);
  }

  async getStores() {
    await wait();
    return this.stores;
  }

  async getOrders() {
    await wait();
    return this.orders;
  }

  async createOrder(request) {
    await wait(5000);
    const readyInTen = new Date();
    readyInTen.setMinutes(readyInTen.getMinutes() + 10);
    const newOrder = {
      ...request,
      pickupTime: readyInTen,
    };
    this.orders.push(newOrder);
    return newOrder;
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

const MockStoreService = new _MockStoreService();

export default Config.USE_MOCKS ? MockStoreService : StoreService;
