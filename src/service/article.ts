import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_BASE_URL = process.env.REACT_APP_API_URL;

export const fetchArticles = async ({ day = 1 }: { day: Number }) => {
  const API_URL = `${API_BASE_URL}/svc/mostpopular/v2/viewed/${day}.json?api-key=${API_KEY}`;
  return axios.get(API_URL);
};
