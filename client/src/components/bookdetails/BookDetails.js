import React from 'react'
import '../bookdetails/Bookdetails.css'

const BookDetails = ({book}) => {
  return (
    
    <div className='book-details'>
      <div >
        <p><strong>{book.bookTitle}</strong></p>
        <p>{book.authorName}</p>
        <p>{book.issueDate}</p>
      </div>
      <button className='return-btn'>Return</button>
    </div>
  )
}

export default BookDetails
