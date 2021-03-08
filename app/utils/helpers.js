export const getSortedData = (data, prop, isAsc) => {
  return data.sort(
    (a, b) =>
      (a[prop].toLowerCase() < b[prop].toLowerCase() ? -1 : 1) *
      (isAsc ? 1 : -1)
  );
};
