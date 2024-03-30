export const getLocaleDate = (date) => {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString('en-GB', {
    weekday: 'short',
  });
};
