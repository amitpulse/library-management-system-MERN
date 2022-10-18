import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ProfilePic from "../profile_pic/ProfilePic";
import '../student/Student.css'


const Student = () => {
  const fetchUser = JSON.parse(localStorage.getItem('user'));
  const userData = fetchUser.user;
  const [profileImg, setProfileImg] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:4400/api/user/login/upload/${userData._id}`)
    .then((res) =>{
      setProfileImg(res.data);
    })
    .catch((err) =>{
      console.log(err);
    })
  }, [userData._id])

  return (

    <div className="main-info">
      <div className="user-image">
        {/* {profileImg && profileImg.map((profPic, _id)=>{
          const base64string = btoa(
                String.fromCharCode(...new Uint8Array(profPic.testImage.data.data))
          )
        return <img src={`data:img/png;base64,${base64string}`} key={_id} className="prof-pic" alt="" />
        })} */}
      </div>
        <ProfilePic/>

        <h4>Full Name : <span>{userData.userName}</span></h4>
        <h4>Email : <span>{userData.email}</span></h4>
        <h4>Student ID : <span>{userData.studentID}</span></h4>
        <h4>Contact No : <span>{userData.contactNum}</span></h4>
        <h4>Department : <span>{userData.department}</span></h4>
        <h4>Year : <span>{userData.year}</span></h4>
        </div>
  );
};

export default Student;
