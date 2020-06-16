const { Router } = require('express');
const router = Router();

const { unlink } = require('fs-extra');

const Book = require('../models/Book');

router.get('/', async (req, res) => {
    const books = await Book.find();
    res.json(books);
});

router.post('/', async (req, res) => {
    const { title, author, isbn } = req.body;
    const imagePath = '/uploads/' + req.file.filename;
    const newBook = new Book({ title, author, isbn, imagePath });
    await newBook.save();
    // res.send('Book saved');
    res.json({ message: 'Book saved' });
});

router.delete('/:id', async (req, res) => {
    // console.log(req.params.id);
    // console.log(book);
    // res.send('Deleting');
    const book = await Book.findByIdAndDelete(req.params.id);
    const imageDeleted = await unlink('./backend/public' + book.imagePath);
    res.json({ message: 'Book deleted' });
});

module.exports = router;