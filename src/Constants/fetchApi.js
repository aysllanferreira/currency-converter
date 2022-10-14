const fetchApi = async (curr) => {
  const response = await fetch(
    `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${curr}.json`
  );
  const data = await response.json();
  return data[curr];
};

export default fetchApi;
