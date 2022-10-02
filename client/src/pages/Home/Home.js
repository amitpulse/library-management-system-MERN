import React, { useEffect, useState } from "react";
import BookDetails from "../../components/bookdetails/BookDetails";
import Navbar from "../../components/navbar/Navbar";
import { useBookContext } from "../../hooks/useBookContext";
import { useAuthContext } from "../../hooks/useAuthContext";

import "../Home/Home.css";
import UserDetails from "../../components/userdetails/UserDetails";

const Home = () => {

  // book import

  const {books, dispatch} = useBookContext();
  const {user} = useAuthContext();
  // const [profile, setProfile] = useState()

  useEffect(() => {
    // const fetchUser = async () => {
    //   const response = await fetch('/api/user', {
    //     headers:{
    //       'Authorization': `Bearer ${user.token}`
    //     }
    //   })
    //   const json = await response.json()

    //   if(response.ok){
    //     setProfile(json)
    //   }
    // }
    const fetchBooks = async () => {
      const response = await fetch('/api/books',{
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
      // fetchUser()
    }

   
  }, [dispatch, user])



  return (
    <div className="home">
      <Navbar />

      <div className="home-content">
        {/* user details */}
        <UserDetails/>
   
        
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
