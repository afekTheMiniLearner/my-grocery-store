export default class ProxyDB {
  constructor(DB_URL) {
    this.DB_URL = DB_URL;
  }

  post(data) {
    fetch(this.DB_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) {
          throw Error(
            `error: ${res.status} while creating data at: ${this.DB_URL}`
          );
        }
        return res.json();
      })
      .then((res) => console.log('Created successfully', res))
      .catch((e) => console.log(e));
  }

  put(data, id) {
    const url = `${this.DB_URL}/${id}`;
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) {
          throw Error(`error: ${res.status} while creating data at: ${url}`);
        }
        return res.json();
      })
      .then((res) => console.log('Updated successfully', res))
      .catch((e) => console.log(e));
  }

  async getAllData() {
    return await fetch(this.DB_URL)
      .then((res) => res.json())
      .then((data) => data)
      .catch((e) => {
        throw Error(`error: ${e} while fetching data from: ${this.DB_URL}`);
      });
  }

  delete(id) {
    const url = `${this.DB_URL}/${id}`;
    fetch(url, {
      method: 'DELETE',
    })
      .then((res) => {
        if (!res.ok) {
          throw Error(`error: ${res.status} while creating data at: ${url}`);
        }
        return res.json();
      })
      .then((res) => console.log('Deleted successfully', res))
      .catch((e) => console.log(e));
  }
}
