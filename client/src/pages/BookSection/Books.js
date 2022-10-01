import React, { useEffect } from "react";
import BookDetails from "../../components/bookdetails/BookDetails";
import Bookform from "../../components/bookform/Bookform";
import Navbar from "../../components/navbar/Navbar";
import '../BookSection/Books.css'
// import axios from 'axios';
import { useBookContext } from "../../hooks/useBookContext";
import { useAuthContext } from "../../hooks/useAuthContext";



const Books = () => {
  // const [books, setBooks] = useState(null);
  
  const {books, dispatch} = useBookContext();
  const {user} = useAuthContext()

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch('/api/books', {
        headers:{
          'Authorization': `Bearer ${user.token}`
        }
      })
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_BOOKS', payload: json})
      }
    }
    if(user){

      fetchBooks()
    }

  }, [dispatch, user])



  // const fetchBooks = async () => {
  //   const response = await axios.get('http://localhost:4400/api/books')
  //   const data = response.data;

  //   if (response.ok) {
  //     dispatch({type: 'SET_BOOKS', payload: data})
  //   }

  //     // setBooks(data);
  // }

  // useEffect(()=>{

  //   // if user has logged in fetch books

  //   // if(user){
  //     fetchBooks();
  //   // }
    
  // }, [dispatch])


  return (
    <div className="books-section">
     <Navbar />
    
      <div className="book-align">
      <Bookform/>
        <div className="books">
          {books && books.map((book) => (
            <BookDetails book={book}  key={book._id}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
