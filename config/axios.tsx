import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_API;

const fetchData = async (options) => {
  const headers = {
    Authorization: `Bearer ${localStorage.getItem("at")}`,
  };

  return axios({
    ...options,
    url: `${BASE_URL}${options.url}`,
    headers,
  });
};

export default fetchData;
