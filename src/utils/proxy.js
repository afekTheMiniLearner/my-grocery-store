// export default class Proxy {
//   constructor(DB_URL) {
//     this.DB_URL = DB_URL;
//   }

//   getRequest() {
//     this.url;
//   }

//   static postRequest;
// }

// export function fetchData(url, onDataFetch, initFn) {
//   fetch(url)
//     .then((res) => {
//       if (!res.ok) {
//         throw Error(`error: ${res.status} while fetching data from: ${url}`);
//       }
//       return res.json();
//     })
//     .then((data) => {
//       initFn(data);
//       onDataFetch(true);
//     })
//     .catch((e) => {
//       throw Error(`error: ${e} while fetching data from: ${url}`);
//     });
// }

// export function onUpdateHandler(data, id) {
//   const url = `${DB_PRODUCTS_URL}/${id}`;
//   fetch(url, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   })
//     .then((res) => {
//       if (!res.ok) {
//         throw Error(`error: ${res.status} while creating data at: ${url}`);
//       }
//       return res.json();
//     })
//     .then((res) => console.log('Updated successfully', res))
//     .catch((e) => console.log(e));
// }

// export function onDeleteHandler(id) {
//   const url = `${DB_PRODUCTS_URL}/${id}`;
//   fetch(url, {
//     method: 'DELETE',
//   })
//     .then((res) => {
//       if (!res.ok) {
//         throw Error(`error: ${res.status} while creating data at: ${url}`);
//       }
//       return res.json();
//     })
//     .then((res) => console.log('Deleted successfully', res))
//     .catch((e) => console.log(e));
// }

// export function onCreationHandler(data) {
//   fetch(DB_PRODUCTS_URL, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   })
//     .then((res) => {
//       if (!res.ok) {
//         throw Error(
//           `error: ${res.status} while creating data at: ${DB_PRODUCTS_URL}`
//         );
//       }
//       return res.json();
//     })
//     .then((res) => console.log('Created successfully', res))
//     .catch((e) => console.log(e));
// }
