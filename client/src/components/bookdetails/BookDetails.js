import React from 'react'
import { useBookContext } from '../../hooks/useBookContext'
import '../bookdetails/Bookdetails.css'

const BookDetails = ({book}) => {

  const {dispatch} = useBookContext()

  const handleDelete = async () =>{
    const response = await fetch('/api/books/' + book._id, {
      method: 'DELETE'
    })
    const json = await response.json()
    if(response.ok){
      dispatch({type: 'DELETE_BOOK', payload: json})

    }
  }
  return (
    
    <div className='book-details'>
      <div >
        <p><strong>{book.bookTitle}</strong></p>
        <p>{book.authorName}</p>
        <p>{book.issueDate}</p>
      </div>
      <button onClick={handleDelete} className='return-btn'>RETURN</button>
    </div>
  )
}

export default BookDetails
