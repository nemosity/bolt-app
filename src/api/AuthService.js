import AsyncStorage from '@react-native-community/async-storage';
import Config from '../config';

export default class AuthService {
  static signUp(creds, cb) {
    return fetch(`${Config.SERVER_URL}/auth/signUp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: creds.username,
        password: creds.password,
        name: 'none',
      }),
    })
      .then((result) => {
        console.log(result);
        return cb({ success: true });
      })
      .catch((error) => {
        console.log(`login failed: ${error}`);
        return cb(
          Object.assign(error, { success: false, badCredentials: true }),
        );
      });
  }

  // now returns a promise
  static login(creds) {
    return fetch(`${Config.SERVER_URL}/auth/signIn`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: creds.email,
        password: creds.password,
      }),
    })
      .then((response) => {
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.indexOf('application/json') !== -1) {
          return response.json();
        }
        throw new Error('API returned invalid JSON obejct');
      })
      .then((json) => {
        if (json.success && json.token) {
          AuthService.authenticateUser({ ...json, token: json.token });
          return json;
        }
        throw new Error('Authentication with API failed');
      })
      .catch((error) => {
        console.log(`login failed: ${error}`);
        throw new Error(`login failed: ${error}`);
      });
  }

  static authenticateUser(userData) {
    return AsyncStorage.setItem('@BoltStore:user', JSON.stringify(userData));
  }

  static isUserAuthenticated() {
    return AsyncStorage.getItem('@BoltStore:user') !== null;
  }

  static deauthenticateUser() {
    return AsyncStorage.removeItem('@BoltStore:user');
  }

  static getUserData() {
    return AsyncStorage.getItem('@BoltStore:user').then((userString) =>
      JSON.parse(userString),
    );
  }

  static getToken() {
    return AsyncStorage.getItem('@BoltStore:user').then(
      (userString) => JSON.parse(userString).token,
    );
  }
}
