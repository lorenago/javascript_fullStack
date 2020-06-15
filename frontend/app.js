// Webpack es una librería de Js y por ello se trabaja a través de ficheros js.
import './styles/app.css';

import BookService from './services/BookService';

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

        const bookService = new BookService();
        bookService.createBook(formData);

        console.log(title, author, isbn, image);
    });