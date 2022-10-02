import React, { useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useBookContext } from '../../hooks/useBookContext'
import '../BookHistory/BookHistory.css'




const BookHistory = ({book}) => {
  const {dispatch} = useBookContext();
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
    <div>
      <Navbar/>
      <div className='book-history'>
      <p>Book Name</p>
      <p>Author Name</p>
      <p>Issue Date</p>
      <p>Return Date</p>
      </div>
    </div>
  )
}

export default BookHistory
