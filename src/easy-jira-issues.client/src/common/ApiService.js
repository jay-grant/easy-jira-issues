const apiAddress = 'http://localhost:9000/api/';

class ApiService {
  static async post(url, payload) {
    const response = await fetch(apiAddress + url, {
      body: JSON.stringify(payload),
      cache: 'no-cache',
      headers: {
        'content-type': 'application/json',
      },
      method: 'post',
    });
    return response.json();
  }

  static async get(url) {
    const response = await fetch(apiAddress + url, {
      method: 'get',
    });
    return response.json();
  }
}

export default new ApiService();
