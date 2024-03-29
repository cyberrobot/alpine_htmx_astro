export const getLocation = async (query) => {
  const response = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${query}`
  );
  const data = await response.json();
  return data;
};
