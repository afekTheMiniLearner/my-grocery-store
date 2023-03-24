export async function getDataFromDB(url) {
  return await fetch(url)
    .then((res) => res.json())
    .then((data) => data)
    .catch((e) => {
      throw Error(`error: ${e} while fetching data from: ${url}`);
    });
}
