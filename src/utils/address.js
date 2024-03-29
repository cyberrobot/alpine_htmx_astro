export const getAddress = (location) => {
  const result = [];
  for (const key in location) {
    if (
      location.hasOwnProperty(key) &&
      /admin\d+$/.test(key) &&
      location[key] !== ''
    ) {
      result.push(location[key]);
    }
  }
  return result.join(', ');
};
