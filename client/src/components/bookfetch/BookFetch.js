import React, { useEffect } from 'react'
import BookDetails from '../bookdetails/BookDetails';
import { useBookContext } from '../../hooks/useBookContext';
import { useAuthContext } from '../../hooks/useAuthContext';
import '../bookfetch/Bookfetch.css'


const BookFetch = () => {
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
  
  
  return (
    <div className="book-lists">
    {books && books.map((book) => (
      <BookDetails book={book}  key={book._id}/>
    ))}
  </div>
  )
}

export default BookFetch
