const express = require('express');
const { GetSellers, GetSeller, AddSeller, DeleteSeller, UpdateSeller } = require('../controllers/Seller')
const { GetCust, GetCusts, AddCust, DeleteCust, UpdateCust }=require('../controllers/Customers')
const { GetBooks, GetBook, AddBook, DeleteBook, UpdateBook }=require('../controllers/Books')
const { purchase,Getpurchased }=require('../controllers/purchase')

const router = express.Router();

router.get('/books', GetBooks);
router.get('/books/:id', GetBook);
router.post('/books', AddBook);
router.delete('/books/:id', DeleteBook);
router.put('/books/:id', UpdateBook);

router.get('/custs', GetCusts);
router.get('/custs/:id', GetCust);
router.post('/custs', AddCust);
router.delete('/custs/:id', DeleteCust);
router.put('/custs/:id', UpdateCust);

router.get('/seller', GetSellers);
router.get('/seller/:id', GetSeller);
router.post('/seller', AddSeller);
router.delete('/seller/:id', DeleteSeller);
router.put('/seller/:id', UpdateSeller);

router.get('/purchase/:id', purchase);
router.get('/purchased/', Getpurchased);

module.exports = router;