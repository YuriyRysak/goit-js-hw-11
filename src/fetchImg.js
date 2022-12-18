import axios from 'axios';
import './css/styles.css';
// import {fetchImg} from './js/fetchImg';
// import Notiflix from 'notiflix';
// import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
export { fetchImg };

const BASE_URL = 'https://pixabay.com/api/'; 
const KEY = '32051710-2614f6ab005cb570915111ece';
// const queryOptions = {
//     options:{
//         key: KEY,
//         q: query,
//         image_type: 'photo',
//         orientation: 'horizontal',
//         safesearch: 'true',
//         per_page: 40,
//         page: 1,
//     }
// }
async function fetchImg(query) {
    try {
        const response = await axios.get(
        `${BASE_URL}?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${1}&per_page=${40}`,
        );
        // console.log(response.data)
        return response;
        
    }
    catch (error) {
        console.log(error);
    }
}



// async function fetchImg(query, page, perPage) {
//     try {
//         const response = await axios.get(
//         `${BASE_URL}?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`,
//         );
//         console.log(response.data)
//         // return response;
        
//     }
//     catch (error) {
//         console.log(error);
//     }
// }
