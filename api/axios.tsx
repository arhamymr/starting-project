import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_API;

const fetchData = async (options) => {
  try {
    const response = await axios({
      ...options,
      url: `${BASE_URL}${options.url}`,
    });
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw new Error("Failed to fetch data from the API");
  }
};

export default fetchData;
