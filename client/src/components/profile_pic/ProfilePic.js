import React, { useEffect, useState } from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'
import '../profile_pic/ProfilePic.css'
import {Buffer} from 'buffer';
import axios from 'axios'

const ProfilePic = () => {
    const fetchUser = JSON.parse(localStorage.getItem("user"));
    const userid = fetchUser.user._id;

    const {user} = useAuthContext();
    const [userProfilePic, setUserProfilePic] = useState({}); // post

    const [error, setError] = useState(null);

    //------------------------- get image function --------------------------------
    const getImageData = async () => {
      await axios
     .get(`http://localhost:4400/api/user/login/upload/${userid}`)
     .then((res) =>{
      const userPhoto = res.data.testImage;
      console.log(userPhoto);

      const bufferString = `data:${userPhoto.contentType};base64, ${Buffer.from(userPhoto.data).toString('base64')}`
      setUserProfilePic(bufferString);
      console.log(bufferString);
    })
    .catch((err) => {
      console.log(err);
    });
    };

    // ----------UPLOAD ---------------
    const uploadImage = (e) => {
      setUserProfilePic(e.target.files[0]);
    };

    const headConfig = {
      "Content-type": "multipart/form-data",
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!user) {
        setError("You need to be logged in to see this page!");
        return;
      }

      const formData = new FormData();
      formData.append("photo", userProfilePic);

      axios
        .patch(
          `http://localhost:4400/api/user/login/upload/${userid}`,
          formData,
          headConfig
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };

  // -------------GET IMAGE --------------

const [profileImg, setProfileImg] = useState('') 
useEffect(() =>{

  const base64String = btoa(
    String.fromCharCode.apply(new Uint8Array(fetchUser.user.testImage))
    
    );
    getImageData()
  setProfileImg(base64String)
  // eslint-disable-next-line react-hooks/exhaustive-deps
},[])



  return (
    <div className='image-container'>
      <div className="user-image">
        <img ng-src={userProfilePic} alt="profile pic" />
        {/* <img ng-src={`data:image/png;base64,${userProfilePic}`} alt="profile pic" /> */}
      </div>

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          type="file"
          accept=".png, .jpg, .jpeg"
          name="photo"
          onChange={uploadImage}
        />

        <input type="submit" />
      </form>
    </div>
  );
}

export default ProfilePic
