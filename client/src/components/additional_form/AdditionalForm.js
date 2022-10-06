import React, { useState } from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'
import '../additional_form/AdditionalForm.css'


const AdditionalForm = () => {
    const {user, dispatch} = useAuthContext();
    const [admission, setAdmission] = useState('')
    const[gender, setGender] = useState('')
    const[bloodGroup, setBloodGroup] = useState('')
    const[emergencyContact, setEmergencyContact] = useState('')
    const[address, setAddress] = useState('')
    const[photo, setPhoto] = useState('')
    const [error, setError] = useState(null);

    const additionalInfo = {admission, gender, bloodGroup, emergencyContact, address, photo}


    const formSubmit = async (e) =>{
        e.preventDefault();
         if(!user){
            setError('You need to be logged in to see this page!')
            return
          }

          const response = await fetch('/api/userinfo/addinfo', {
            method:'POST',
            body: JSON.stringify(additionalInfo),
            headers:{
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${user.token}`
            }
          })
          const json = response.json();
          if(json.error){
            setError(json.error)
      
          }
          if(response.ok){
            setAdmission('')
            setGender('')
            setBloodGroup('')
            setEmergencyContact('')
            setAddress('')
            setPhoto('')
            setError(null)
            dispatch({type: 'LOGIN', payload: user})
          }


        }

  return (
    <div className="update-user-form" encType="multipart/form-data">
    <form action="" className="extra-form-data" onSubmit={formSubmit}>
   
      <input type="text" name='admission' placeholder="Admission" onChange={(e) => setAdmission(e.target.value)} value={admission}/>
      <br />
      <input type="text" name='gender' placeholder="Gender" onChange={(e) => setGender(e.target.value)} value={gender}/>
      <br />
      <input type="text" name='bloodGroup' placeholder="Blood Group" onChange={(e) => setBloodGroup(e.target.value)} value={bloodGroup}/>
      <br />
      <input type="number" name='emergencyContact' placeholder="Emergency Contact No" onChange={(e) => setEmergencyContact(e.target.value)} value={emergencyContact}/>
      <br />
      <textarea name="address" id="" rows="5" placeholder="Address" onChange={(e) => setAddress(e.target.value)} value={address}></textarea>
      <br />
      
      <div className="update-btn">
        <button type='submit'>SAVE</button>
      {error && <div className="extra-form--error">{error}</div>}
      </div>
    </form>
  </div>
  )
};

export default AdditionalForm


