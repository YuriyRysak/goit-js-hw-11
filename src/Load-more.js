import './css/styles.css';
// import {fetchImg} from './js/fetchImg';
// import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';



const BASE_URL = 'https://pixabay.com/api/'; 
const KEY = '32051710-2614f6ab005cb570915111ece';
    
const searchForm = document.querySelector('#search-form');

searchForm.addEventListener('click', fetchImg)

// console.log(res.data);
const query = "dog";

async function fetchImg(query, page, perPage) {
    try {
        const response = await axios.get(
        `${BASE_URL}?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`,
        );
        console.log(response.data)
        return response;
        
    }
    catch (error) {
        console.log(error);
    }
}










 


























/** розгляд питань */
// const response = {
//   ok: false,
//   status: 200
// }

// let customError;
// if (!response.ok) {
//   throw 'I faced an error';
// }

// console.log(customError)