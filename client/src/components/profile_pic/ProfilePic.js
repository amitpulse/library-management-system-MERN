import React, { useEffect, useState } from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'
import '../profile_pic/ProfilePic.css'
import axios from 'axios'

const ProfilePic = () => {
    const fetchUser = JSON.parse(localStorage.getItem("user"));
    const userid = fetchUser.user._id;

    const {user} = useAuthContext();
    const [profilePic, setProfilePic] = useState('');
    const [error, setError] = useState(null);

    //------------------------- get image function --------------------------------
    const getImageData = async () => {
      await axios
     .get(`http://localhost:4400/api/user/login/upload/${userid}`)
     .then((res) =>{
      setProfilePic(res.data.testImage.data);
      console.log(res.data.testImage.data);
    })
    .catch((err) => {
      console.log(err);
    });
    };

    // ----------UPLOAD ---------------
    const uploadImage = (e) => {
      setProfilePic(e.target.files[0]);
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
      formData.append("photo", profilePic);

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
    String.fromCharCode.apply(new Uint8Array(fetchUser.user.testImage.data.data))
    
    );
  //  console.log(base64String);
  setProfileImg(base64String)
  getImageData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
},[])



  return (
    <div className='image-container'>
      <div className="user-image">
        <img src={`data:image/png;base64,${profileImg}`} alt="profile pic" />
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
