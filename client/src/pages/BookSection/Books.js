import React, { useEffect, useState } from "react";
import BookDetails from "../../components/bookdetails/BookDetails";
import Bookform from "../../components/bookform/Bookform";
import Navbar from "../../components/navbar/Navbar";
import '../BookSection/Books.css'
import axios from 'axios';
import { useBookContext } from "../../hooks/useBookContext";
import { BooksContext } from "../../context/BooksContext";
// import { useAuthContext } from "../../hooks/useAuthContext";



const Books = () => {
  // const [books, setBooks] = useState(null);
  // const {user} = useAuthContext()

  const {books, dispatch} = useBookContext(BooksContext);

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:4400/api/books')
    const data = response.data;
      // setBooks(data);
    
  }

  useEffect(()=>{

    // if user has logged in fetch books

    // if(user){
      fetchBooks();
    // }
    
  }, [])


  return (
    <div className="books-section">
     <Navbar />
    
      <div className="book-align">
      <Bookform/>
        <div className="books">
          {books && books.map((book) => (
            <BookDetails key={book._id} book={book}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
