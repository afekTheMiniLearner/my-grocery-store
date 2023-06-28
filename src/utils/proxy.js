export default class BaseProxy {
  constructor(url) {
    this.url = url;
  }

  async getAllData() {
    const requestUrl = this.url;
    const method = 'GET';
    let response;

    await fetch(requestUrl)
      .then((res) => {
        if (!res.ok) {
          throw Error(`error:${res.status},method:${method},url:${requestUrl}`);
        }
        return res.json();
      })
      .then((data) => {
        response = data;
      })
      .catch((e) => {
        console.error(e);
        response = null;
      });

    return response;
  }

  async getData(id) {
    const requestUrl = `${this.url}/${id}`;
    const method = 'GET';
    let response;

    await fetch(requestUrl)
      .then((res) => {
        if (!res.ok) {
          throw Error(`error:${res.status},method:${method},url:${requestUrl}`);
        }
        return res.json();
      })
      .then((data) => {
        response = data;
      })
      .catch((e) => {
        console.error(e);
        response = null;
      });

    return response;
  }

  async post(data) {
    const requestUrl = this.url;
    const method = 'POST';
    let response;

    await fetch(requestUrl, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) {
          throw Error(`error:${res.status},method:${method},url:${requestUrl}`);
        }
        return res.json();
      })
      .then(() => {
        response = true;
      })
      .catch((e) => {
        console.error(e);
        response = false;
      });

    return response;
  }

  async put(data, id) {
    const requestUrl = `${this.url}/${id}`;
    const method = 'PUT';
    let response;

    await fetch(requestUrl, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) {
          throw Error(`error:${res.status},method:${method},url:${requestUrl}`);
        }
        return res.json();
      })
      .then(() => {
        response = true;
      })
      .catch((e) => {
        console.error(e);
        response = false;
      });

    return response;
  }

  async delete(id) {
    const requestUrl = `${this.url}/${id}`;
    const method = 'DELETE';

    let response;

    await fetch(requestUrl, { method })
      .then((res) => {
        if (!res.ok) {
          throw Error(`error:${res.status},method:${method},url:${requestUrl}`);
        }
        return res.json();
      })
      .then(() => {
        response = true;
      })
      .catch((e) => {
        console.error(e);
        response = false;
      });

    return response;
  }
}
