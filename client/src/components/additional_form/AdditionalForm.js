import React, { useState } from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'
import '../additional_form/AdditionalForm.css'


const AdditionalForm = () => {
    const {user} = useAuthContext();

    const [admission, setAdmisson] = useState('')
    const [gender, setGender] = useState('')
    const [bloodGroup, setBloodGroup] = useState('')
    const [emergencyContact, setEmergencyContact] = useState('')
    const [address, setAddress] = useState('')

    const extraData = {admission, gender, bloodGroup, emergencyContact, address}
  return (
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
        <button type='submit'>EDIT</button>
        <button type='submit'>SAVE</button>
      </div>
    </form>
  </div>
  )
}

export default AdditionalForm
