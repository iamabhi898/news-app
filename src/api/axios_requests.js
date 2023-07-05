import axios from "axios";

export const axiosTopStoriesGetRequest = async () => {
  try {
    const res = await axios({
      method: "get",
      url: `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_API_KEY}`,
    });
    return Promise.resolve(res);
  } catch (err) {
    return Promise.reject(err.response?.data);
  }
};

export const axiosSearchGetRequest = async (searchValue) => {
  try {
    const res = await axios({
      method: "get",
      url: `https://newsapi.org/v2/everything?q=${searchValue}&from=2023-07-04&sortBy=popularity&apiKey=${process.env.REACT_APP_API_KEY}`,
    });
    return Promise.resolve(res);
  } catch (err) {
    return Promise.reject(err.response?.data);
  }
};
