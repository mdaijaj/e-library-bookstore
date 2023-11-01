import { Route } from "react-router";
import { Routes } from 'react-router-dom'
import Signup from "./signup";
import Login from "./login";
import Home from "./home"
import BooksDetails from "./book_details"
import Authors from "./author"
import AuthorsDetails from "./author_details";
import Cart from "./cart";
import Payment from "./payment"

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/all_books" element={<Home />} />
        <Route path="/add_book" element={<Home />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/cartlist" element={<Cart />} />
        <Route path="/author_details/:id" element={<AuthorsDetails />} />
        <Route path="/book_details/:id" element={<BooksDetails />} />
      </Routes>
    </>
  )
}

export default Routing;