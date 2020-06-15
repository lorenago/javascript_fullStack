// Webpack es una librería de Js y por ello se trabaja a través de ficheros js.
import './styles/app.css';

import UI from './UI';

const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
    ui.renderBooks();
});

document.getElementById('book-form')
    .addEventListener('submit', e => {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const isbn = document.getElementById('isbn').value;
        const image = document.getElementById('image').files;

        const formData = new FormData();
        formData.append('title', title);
        formData.append('author', author);
        formData.append('isbn', isbn);
        formData.append('image', image[0]);

        ui.addNewBook(formData);

        console.log(title, author, isbn, image);
    });