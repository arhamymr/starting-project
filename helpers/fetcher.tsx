export const fetcher = async (url, config) => {
  return await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    ...config,
  });
};
