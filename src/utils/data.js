export const getLocation = async (query) => {
  const response = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${query}`
  );
  const data = await response.json();
  return data;
};

export const getWeatherForecast = async ({
  lat,
  lng,
}) => {
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max`
  );
  const data = await response.json();
  return data;
};