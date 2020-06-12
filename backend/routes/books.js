const { Router } = require('express');
const router = Router();

const Book = require('../models/Book');

router.get('/', async (req, res) => {
    const books = await Book.find();
    res.json(books);
});

router.post('/', async (req, res) => {
    const { title, author, isbn } = req.body;
    const newBook = new Book({ title, author, isbn });
    await newBook.save();
    // res.send('Book saved');
    res.json({ message: 'Book saved' });
});

router.delete('/:id', async (req, res) => {
    // console.log(req.params.id);
    // const book = await Book.findByIdAndDelete(req.params.id);
    // console.log(book);
    // res.send('Deleting');
    await Book.findByIdAndDelete(req.params.id);
    res.json({ message: 'Book deleted' });
});

module.exports = router;