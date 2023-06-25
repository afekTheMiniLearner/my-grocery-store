export default class ProxyDB {
  constructor(DB_URL) {
    this.DB_URL = DB_URL;
  }

  async getAllData() {
    const url = this.DB_URL;
    const method = 'GET';
    let response;

    await fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error(`error:${res.status},method:${method},url:${url}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(`${method} Request done successfully`);
        response = data;
      })
      .catch((e) => {
        console.error(e);
        response = null;
      });

    return response;
  }

  async getData(id) {
    const url = `${this.DB_URL}/${id}`;
    const method = 'GET';
    let response;

    await fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error(`error:${res.status},method:${method},url:${url}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(`${method} Request done successfully`);
        response = data;
      })
      .catch((e) => {
        console.error(e);
        response = null;
      });

    return response;
  }

  async post(data) {
    const url = this.DB_URL;
    const method = 'POST';
    let response;

    await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) {
          throw Error(`error:${res.status},method:${method},url:${url}`);
        }
        return res.json();
      })
      .then(() => {
        console.log(`${method} Request done successfully`);
        response = true;
      })
      .catch((e) => {
        console.error(e);
        response = false;
      });

    return response;
  }

  async put(data, id) {
    const url = `${this.DB_URL}/${id}`;
    const method = 'PUT';
    let response;

    await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) {
          throw Error(`error:${res.status},method:${method},url:${url}`);
        }
        return res.json();
      })
      .then(() => {
        console.log(`${method} Request done successfully`);
        response = true;
      })
      .catch((e) => {
        console.error(e);
        response = false;
      });

    return response;
  }

  async delete(id) {
    const url = `${this.DB_URL}/${id}`;
    const method = 'DELETE';

    let response;

    await fetch(url, {
      method,
    })
      .then((res) => {
        if (!res.ok) {
          throw Error(`error:${res.status},method:${method},url:${url}`);
        }
        return res.json();
      })
      .then(() => {
        console.log(`${method} Request done successfully`);
        response = true;
      })
      .catch((e) => {
        console.error(e);
        response = false;
      });

    return response;
  }
}
