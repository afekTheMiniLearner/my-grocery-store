import { DB_PRODUCTS_URL } from './consts';

export async function getDataFromDB(url) {
  return await fetch(url)
    .then((res) => res.json())
    .then((data) => data)
    .catch((e) => {
      throw Error(`error: ${e} while fetching data from: ${url}`);
    });
}

export async function deleteFromDB(url) {
  return await fetch(url, { method: 'DELETE' })
    .then((res) => {
      if (!res.ok) {
        throw Error(`error: ${res.status} while deleting data at: ${url}`);
      }
      return res.json();
    })
    .catch((e) => {
      throw Error(`error: ${e} while deleting data at: ${url}`);
    });
}

export function onUpdateHandler(data, id) {
  const url = `${DB_PRODUCTS_URL}/${id}`;
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

export function onDeleteHandler(id) {
  const url = `${DB_PRODUCTS_URL}/${id}`;
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

export function onCreationHandler(data) {
  fetch(DB_PRODUCTS_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (!res.ok) {
        throw Error(
          `error: ${res.status} while creating data at: ${DB_PRODUCTS_URL}`
        );
      }
      return res.json();
    })
    .then((res) => console.log('Created successfully', res))
    .catch((e) => console.log(e));
}
