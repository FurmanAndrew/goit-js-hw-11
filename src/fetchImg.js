import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const API_KEY = '33615028-7cec3f3fea4cd6dcf5fac2769';
const perPage = 40;

export default async function fetchImg(search, numberPage) {
    try {
        const response = await axios.get(`${URL}?key=${API_KEY}&q=${search}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${perPage}&page=${numberPage}`)
        return response.data;
    } catch(error) {
    console.error(error);
  }
}

