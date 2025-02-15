import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com';

import { refs } from '../main.js';
export function onSubmit(e) {
  e.preventDefault();
  const inputValue = refs.searchInput.value.trim();
  if (!inputValue) {
    return;
  }
  refs.form.reset();
  axios
    .get('/api/', {
      params: {
        key: '48862080-31d0d2e2035ba3e1d36ba0d4d',
        q: inputValue,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => {
      const result = response.data.hits;
      console.log(result);
      showError(result);
    })
    .catch(error => {
      console.log(error);
    });
}

function showError(arr) {
  if (arr.length === 0) {
    iziToast.error({
      title: 'Error',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
    });
  }
}
