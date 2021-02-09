export const getDateOnly = (date) => {
  let options = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  return new Date(date).toLocaleDateString("en-US", options);
};
