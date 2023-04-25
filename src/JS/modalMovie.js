import './open-and-close-modal';
import { renderModal } from './modalMarkup';

// funkcja otwierająca moda
// (() => {
const refs = {
  openModalBtn: document.querySelector('.films-cards-set'),
  closeModalBtn: document.querySelector('.modal__cross-btn'),
  modal: document.querySelector('.backdrop'),
};

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);

function toggleModal(e) {
  refs.modal.classList.toggle('is-hidden');
  openModal(e);
}
// })();
const openModal = e => {
  if (!e.currentTarget.classList.contains('film-card')) {
    // zakanczamy dzialanie funkcji, kliknelismy nie w karte
    return;
  }

  //   // kliknielismy w karte, dzialamy dalej

  //   // otrzymujemy id z data-id atrybutu, ktory zostal dodany wczesniej do karty
  const id = e.currentTarget.dataset.id;
  // pobranie id filmu z atrybutu "data-id" klikniętego elementu
  const movieId = e.currentTarget.closest('.film-card').getAttribute('data-id');
  const backdrop = document.querySelector('.backdrop');

  fetchMovieById(movieId)
    .then(response => {
      console.log(response);
      if (!response.ok) {
        if (response.status === 429) {
          // Too Many Requests
          console.error('Error: Too many requests to API.');
        } else {
          console.error(
            'Error: Failed to fetch data from API. Status code:',
            response.status
          );
        }
        throw new Error(response.status);
      }
      const movieData = response.json();
      return movieData;
    })
    .then(movieData => {
      backdrop.innerHTML = renderModal(movieData);

      // dodanie elementu backdrop do ciała dokumentu
      document.body.appendChild(backdrop);
    })
    .catch(error => {
      throw new Error(error);
    });

  const fetchMovieById = async id => {
    const API_URL = 'https://api.themoviedb.org/3/movie/';
    const API_KEY = 'b118f38ec77100db6763b4cc83604589';
    const FETCH_URL = `${API_URL}` + `${id}` + '?api_key=' + `${API_KEY}`;

    const response = await fetch(FETCH_URL);
    return response;
  };

  // szukamy nasza liste w DOM
  const galleryListDOM = document.querySelector('.films-cards-set'); // tu powinna by klasa calej galerii/listy
};

export { openModal };
