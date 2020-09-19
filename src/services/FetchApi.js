import axios from 'axios';

const API_Key = '29bf7f713d69b5441e226c24cb953f06';
axios.defaults.baseURL = `https://api.themoviedb.org/3`;

export const movieFetchApi = async () => {
  try {
    const { data } = await axios.get(`/trending/all/day?api_key=${API_Key}`);
    return data.results;
  } catch (error) {
    throw error;
  }
};

export const FetchApiQuery = async query => {
  try {
    const { data } = await axios.get(
      `/search/movie?api_key=${API_Key}&language=en-US&page=1&query=${query}`,
    );
    return data.results;
  } catch (error) {
    throw error;
  }
};

export const FetchMovieDetails = movie_id => {
  return axios.get(`/movie/${movie_id}?api_key=${API_Key}`);
};

export const FetchCast = movie_id => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${API_Key}`,
  );
};

export const FetchReviews = movie_id => {
  return axios.get(
    `/movie/${movie_id}/reviews?api_key=${API_Key}&language=en-US&page=1`,
  );
};
