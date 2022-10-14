import React, { useState } from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'
import '../profile_pic/ProfilePic.css'

const ProfilePic = () => {

    const {user} = useAuthContext();
    const [profilePic, setProfilePic] = useState({photo: ''});
    const [error, setError]= useState(null);

    
    const uploadImage = (e) => {
        setProfilePic({...profilePic, photo: e.target.files});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!user){
        setError('You need to be logged in to see this page!')
        return

    }
    
    const formData = new FormData();
    formData.append('testImage', profilePic.photo.name);
    
        const response = await fetch('/api/image/upload', {
            method:'POST',
            body: formData,
            headers:{
              // 'Accept': 'application/json',
              // 'Content-Type': `multipart/form-data`,
              'Authorization': `Bearer ${user.token}`
            }
          })
          const json = response.json();
          if(json.error){
            setError(json.error)
          }

    }

  return (
    <div>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
      <input  type="file"  name="testImage" onChange={uploadImage}/>
              <input type="submit"/>
              {error && <div className="photo-error">{error}</div>}
      </form>
    </div>
  )
}

export default ProfilePic
