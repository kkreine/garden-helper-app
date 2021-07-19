

export default class ApiClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async getData(path) {
    const resp = await fetch(new URL(path, this.baseUrl));
    const data = await resp.json();
    return data;
  }
}
