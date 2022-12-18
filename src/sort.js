import './css/styles.css';
import {fetchImg} from './fetchImg';
// import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const searchForm = document.getElementById('search-form');
const inputEl = document.querySelector('.input-search');
const submitBtn = document.querySelector('.submitBtn');
const galleryEl = document.querySelector('.gallery');

searchForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  let inputValue = inputEl.value.trim();
  
  if (!inputValue) {
    return
  }

fetchImg(inputValue)
  .then(data => {
    console.log(data);
  })
  .catch(error => error.message);
}