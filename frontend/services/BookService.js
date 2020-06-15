/**
 * Class BookService
 * Contiene las lógicas necesarias para la integración
 * con el CRUD de libros del backend.
 */
export default class BookService {
    constructor() {
        this.URI = 'http://localhost:3000/api/books';
    }

    async getBooks() {
        const response = await fetch(this.URI);
        const books = await response.json();
        return books;
    }

    async createBook(book) {
        const response = await fetch(this.URI, {
            method: 'POST',
            body: book
        });
        const newBook = await response.json();
        return newBook;
    }

    async deleteBook(bookId) {
        const response = await fetch(`${this.URI}/${bookId}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'DELETE',
        });
        const deletedBook = await response.json();
        console.log(deletedBook);
        return deletedBook;
    }
}
