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
        ui.renderMessage('Nuevo libro guardado', 'success', 3);

        console.log(title, author, isbn, image);
    });

document.getElementById('books-cards')
    .addEventListener('click', e => {
        e.preventDefault();
        if (e.target.classList.contains('delete')) {
            const bookId = e.target.getAttribute('_id');
            ui.deleteBook(bookId);
            ui.renderMessage('Libro eliminado', 'danger', 2);
        }
    });