export async function getDataFromDB(url) {
  return await fetch(url)
    .then((res) => res.json())
    .then((data) => data)
    .catch((e) => {
      console.log(`error: ${e} while fetching data from: ${url}`);
    });
}
