import React, { useEffect } from "react";
import BookDetails from "../../components/bookdetails/BookDetails";
import Navbar from "../../components/navbar/Navbar";
import { useBookContext } from "../../hooks/useBookContext";
import "../Home/Home.css";

const Home = () => {

  // book import

  const {books, dispatch} = useBookContext();

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch('/api/books')
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_BOOKS', payload: json})
      }
    }

    fetchBooks()
  }, [dispatch])



  return (
    <div className="home">
      <Navbar />

      <div className="home-content">
        {/* user details */}
        <div className="user-detail">
          <div className="user-image">
            <img src="" alt="" />
          </div>
          <h4>Full Name</h4>

        </div>
        
        {/* user form */}
        <div className="update-user-form">
          <form action="" className="extra-form-data">
            <input type="text" placeholder="Admission" />
            <br />
            <input type="text" placeholder="Gender" />
            <br />
            <input type="text" placeholder="Blood Group" />
            <br />
            <input type="text" placeholder="Emergency Contact No" />
            <br />
            <textarea name="" id="" rows="5" placeholder="Address"></textarea>
            <br />
            <div className="update-btn">
              <button>EDIT</button>
              <button>SAVE</button>
            </div>
          </form>
        </div>

        <div className="books-list">
          <h2>Books in your account</h2>
          <div className="home-book">
          {books && books.map((book) => (
            <BookDetails book={book}  key={book._id}/>
           
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
