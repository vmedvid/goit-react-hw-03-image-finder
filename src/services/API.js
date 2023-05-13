import axios from 'axios';

const API_KEY = '34729074-3827824f208858ff842e5fedb';
const PER_PAGE = 12;

axios.defaults.baseURL = 'https://pixabay.com/api';

export async function getData(query, page) {
  const response = await axios.get(
    `?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`
  );

  const isMore = response.data.totalHits > PER_PAGE * page;

  return { reqGallery: response.data.hits, isMore };
}
