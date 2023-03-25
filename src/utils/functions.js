export async function getDataFromDB(url) {
  return await fetch(url)
    .then((res) => res.json())
    .then((data) => data)
    .catch((e) => {
      throw Error(`error: ${e} while fetching data from: ${url}`);
    });
}

export async function putDataToDB(url, data) {
  return await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (!res.ok) {
        throw Error(`error: ${res.status} while updating data at: ${url}`);
      }
      return res.json();
    })
    .catch((e) => {
      throw Error(`error: ${e} while updating data at: ${url}`);
    });
}

export async function deleteFromDB(url) {
  return await fetch(url, { method: "DELETE" })
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

export async function postDataToDB(url, data) {
  return await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (!res.ok) {
        throw Error(`error: ${res.status} while creating data at: ${url}`);
      }
      return res.json();
    })
    .catch((e) => {
      throw Error(`error: ${e} while creating data at: ${url}`);
    });
}

export function onUpdateHandler(data, id) {
  putDataToDB(`http://localhost:3004/ProductsData/${id}`, data)
    .then((res) => console.log("updated successfully", res))
    .catch((e) => console.log(e));
}

export function onDeleteHandler(id) {
  deleteFromDB(`http://localhost:3004/ProductsData/${id}`)
    .then((res) => console.log("deleted successfully", res))
    .catch((e) => console.log(e));
}

export function onCreationHandler(data) {
  postDataToDB(`http://localhost:3004/ProductsData`, data)
    .then((res) => console.log("created successfully", res))
    .catch((e) => console.log(e));
}
