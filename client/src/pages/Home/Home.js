import React from "react";
import Navbar from "../../components/navbar/Navbar";
import BookDetails from "../../components/bookdetails/BookDetails";
import "../Home/Home.css";

const Home = () => {

  

  return (
    <div className="home">
      <Navbar />

      <div className="home-content">
        <div className="user-detail">
          <h2>User</h2>
        </div>

        <form action="" className="update-user-form">
          <input type="text" placeholder="Admission" />
          <br />
          <input type="text" placeholder="Gender" />
          <br />
          <input type="text" placeholder="Blood Group" />
          <br />
          <input type="text" placeholder="Emergency Contact No" />
          <br />
          <textarea name="" id=""  rows="5" placeholder="Address"></textarea>
          <br />
          <div className="update-btn">
            <button>EDIT</button> <button>SAVE</button>
          </div>
        </form>

        <div className="books-list">
          <h2>Books in your account</h2>


        </div>
      </div>
    </div>
  );
};

export default Home;
