import AsyncStorage from '@react-native-async-storage/async-storage';
import Config from '../config';

class AuthService {
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
      .then(result => {
        console.log(result);
        return cb({ success: true });
      })
      .catch(error => {
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
      .then(response => {
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.indexOf('application/json') !== -1) {
          return response.json();
        }
        throw new Error('API returned invalid JSON obejct');
      })
      .then(json => {
        if (json.success && json.token) {
          AuthService.authenticateUser({ ...json, token: json.token });
          return json;
        }
        throw new Error('Authentication with API failed');
      })
      .catch(error => {
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
    return AsyncStorage.getItem('@BoltStore:user').then(userString =>
      JSON.parse(userString),
    );
  }

  static getToken() {
    return AsyncStorage.getItem('@BoltStore:user').then(
      userString => JSON.parse(userString).token,
    );
  }
}

const DEFAULT_API_DELAY = 1000;
const wait = (delay = DEFAULT_API_DELAY) =>
  new Promise(resolve => setTimeout(resolve, delay));

class _MockAuthService {
  constructor() {
    this.login = this.login.bind(this);
  }
  // now returns a promise
  async login() {
    await wait();
    const response = {
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1OTAwZTEyZDI5NjljMzIyZTEwYTNhNjAiLCJpYXQiOjE1OTAyMDI4Mjh9.Xuvlrb6ZeP7FjwwKfdtGIS8R02cWR4WibEUweLkRLk4',
      success: true,
      message: 'You have successfully logged in!',
      user: {
        name: 'Joe',
        email: 'new',
        message: '',
        image: 'https://www.dropbox.com/s/d1drrk0lab38s0c/joe.jpg?dl=1',
      },
    };
    await this.authenticateUser(response);
    return response;
  }

  async authenticateUser(userData) {
    return AsyncStorage.setItem('@BoltStore:user', JSON.stringify(userData));
  }

  async isUserAuthenticated() {
    return AsyncStorage.getItem('@BoltStore:user') !== null;
  }

  async deauthenticateUser() {
    return AsyncStorage.removeItem('@BoltStore:user');
  }

  async getUserData() {
    return AsyncStorage.getItem('@BoltStore:user').then(userString =>
      JSON.parse(userString),
    );
  }

  async getToken() {
    return AsyncStorage.getItem('@BoltStore:user').then(
      userString => JSON.parse(userString).token,
    );
  }
}

const MockAuthService = new _MockAuthService();

export default Config.USE_MOCKS ? MockAuthService : AuthService;
