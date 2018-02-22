import Maybe from './Maybe';

const apiAddress = 'http://localhost:5000/api/';

export default class ApiService {
  static async post(url, payload) {
    try {
      const response = await fetch(apiAddress + url, {
        body: JSON.stringify(payload),
        cache: 'no-cache',
        headers: {
          'content-type': 'application/json',
        },
        method: 'post',
      });
      return await Maybe.json(response);
    } catch (e) {
      return false;
    }
  }

  static async get(url) {
    try {
      const response = await fetch(apiAddress + url, {
        method: 'get',
      });
      return Maybe.json(response);
    } catch (e) {
      return false;
    }
  }
}
