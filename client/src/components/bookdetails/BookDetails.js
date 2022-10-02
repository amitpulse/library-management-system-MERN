import React from 'react'
import { useBookContext } from '../../hooks/useBookContext'
import '../bookdetails/Bookdetails.css'
import { useAuthContext } from "../../hooks/useAuthContext";

//date-fns
// import formatDistanceToNow from 'date-fns/formatDistanceToNow'



const BookDetails = ({book}) => {

  const {dispatch} = useBookContext()
  const {user} = useAuthContext();

  const handleDelete = async () =>{
    if(!user){
      return
    }
    const response = await fetch('/api/books/' + book._id, {
      method: 'DELETE',
      headers:{
        'Authorization': `Bearer ${user.token}`
      }
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
        {/* <p>{formatDistanceToNow(new Date(book.issueDate), {addSuffix: true})}</p> */}
        <p>{book.issueDate}</p>
      </div>
      <button onClick={handleDelete} className='return-btn'>RETURN</button>
    </div>
  )
}

export default BookDetails
