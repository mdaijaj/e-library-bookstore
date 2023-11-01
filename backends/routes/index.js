require('dotenv').config();
const express= require('express')
const router=express()
const user= require('../controller/user.controller') 
const Books= require('../controller/book.controller') 
const {login_required}= require('../middleware/index')


//users routes
router.post('/api/signup', user.signup);
router.post('/api/signin', user.signin)
router.get('/api/logout', login_required, user.logout) 
router.get('/api/profile_details/:id', login_required, user.profileDetails)
router.put('/api/update_details/:id', login_required, user.updateDetails)  
router.get('/api/allUsers', user.allAuthors)


//books
router.post('/api/addbooks', login_required, Books.addBook)
router.put('/api/update_books/:id', login_required, Books.updateBookDetails)
router.put('/api/delete_books_Details/:id', login_required, Books.deleteBookDetails)
router.get('/api/getall_books', Books.getAllBooks)
router.get('/api/getall_books_byauthor/:id', Books.getAllBooksByAuthor)
router.get('/api/booksDetails/:id', Books.bookDetails)
router.get('/api/searchbooks', Books.searchBook)
router.put('/api/update_tocart/:id', Books.updateToCart)
router.put('/api/removeToCart/:id', Books.removeToCart)
router.get('/api/cart_list', Books.getAllBooksCart)



module.exports = router;
