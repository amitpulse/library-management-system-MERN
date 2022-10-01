import React, { useState } from "react";
import '../bookform/Bookform.css'
import { useBookContext } from "../../hooks/useBookContext";
import { useAuthContext } from "../../hooks/useAuthContext";


// import axios from 'axios';

const Bookform = () => {
  const {dispatch} = useBookContext();
  const {user} = useAuthContext();
  
  const [bookTitle, setBookTitle] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [issueDate, setDate] = useState('');
  const [error, setError] = useState(null)
  
  const books = {bookTitle, authorName, issueDate}
  
  const formSubmit = async (e) => {
    e.preventDefault();
    if(!user){
      setError('You need to be logged in to see this page!')
      return
    }
    const response = await fetch('/api/books', {
      method:'POST',
      body: JSON.stringify(books),
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = response.json();
    if(!response.ok){
      setError(json.error)
    }
    if(response.ok){
      setBookTitle('')
      setAuthorName('')
      setDate('')
      setError(null)
      dispatch({type: 'CREATE_BOOK', payload: json})
    }
    // const response = await axios.post('http://localhost:4400/api/books', books)
    // const data = await response.data;
    // setBookTitle(data)
    // setAuthorName(data)
    // setDate(data);
// setup context and then come back

  }
  return (
    <div className="book-form">
      <h3>Enter Book Details</h3>
      <form className="create-book" onSubmit={formSubmit}>
        <input type="text" onChange={(e) => setBookTitle(e.target.value)} value={bookTitle} placeholder="Book Name"/><br />
        <input type="text"  onChange={(e) => setAuthorName(e.target.value)} value={authorName} placeholder="Author Name"/><br />
        <input type="date" onChange={(e) => setDate(e.target.value)} value={issueDate}/><br />
        <button>Add Book</button> 
        {error && <div className="form-error">{error}</div>}
      </form>
    </div>
  );
};

export default Bookform;
