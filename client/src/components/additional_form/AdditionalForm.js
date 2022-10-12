import React, { useState } from "react";
import "../additional_form/AdditionalForm.css";

const AdditionalForm = () => {

  const fetchUser = JSON.parse(localStorage.getItem('user'));
  const userData = fetchUser.user;

  const [admission, setAdmission] = useState("");
  const [gender, setGender] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");
  const [address, setAddress] = useState("");
  const [isDisabled, setIsDisabled] = useState(true)

  const handleSubmit = () =>{
    setIsDisabled(true);
  }

  const handleUpdate = () => {
    setTimeout(() => {
      setIsDisabled(false)
      
    }, 200);
  }

  const formSubmit = (e) => {
    e.preventDefault()

  }

  return (
    <div className="update-user-form" encType="multipart/form-data">
      <form action="" className="extra-form-data" onSubmit={formSubmit}>
        <input
          type="text"
          name="admission"
          placeholder="Admission"
          disabled={isDisabled}
          onChange={(e) => setAdmission(e.target.value)}
          value={userData.admission}
        />
        <br />
        <input
          type="text"
          name="gender"
          placeholder="Gender"
          disabled={isDisabled}
          onChange={(e) => setGender(e.target.value)}
          value={userData.gender}
        />
        <br />

        <input
          type="text"
          name="bloodGroup"
          placeholder="Blood Group"
          disabled={isDisabled}
          onChange={(e) => setBloodGroup(e.target.value)}
          value={userData.bloodGroup}
          readOnly={false}
        />
        <br />
        <input
          type="number"
          name="emergencyContact"
          placeholder="Emergency Contact No"
          disabled={isDisabled}
          onChange={(e) => setEmergencyContact(e.target.value)}
          value={userData.emergencyContact}
        />
        <br />
        <textarea
          name="address"
          id=""
          rows="5"
          placeholder="Address"
          disabled={isDisabled}
          onChange={(e) => setAddress(e.target.value)}
          value={userData.address}
        ></textarea>
        <br />

        <div className="update-btn">
          <button type="reset"  onClick={handleUpdate}>
            EDIT
          </button>
          <button type="submit" disabled={isDisabled} onClick={handleSubmit}>
            SAVE
          </button>
        </div>
      </form>
     <div className="extra-form--error"></div>
    </div>
  );
};

export default AdditionalForm;
