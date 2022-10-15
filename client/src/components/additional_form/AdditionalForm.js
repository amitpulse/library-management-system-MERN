import React, { useState } from "react";
import { useEffect } from "react";
import "../additional_form/AdditionalForm.css";
import axios from "axios";

const AdditionalForm = () => {
  const fetchUser = JSON.parse(localStorage.getItem("user"));
  const userid = fetchUser.user._id;

  const [readInput, setReadInput] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);
  const [extraDetails, setExtraDetails] = useState("");

  const getExtraDetails = async () => {
       await axios
      .get(`http://localhost:4400/api/user/login/${userid}`)
      .then((res) =>{
        setExtraDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

  };

  useEffect(() => {
    getExtraDetails();
  }, []);

  // -------------------UPDATE INFO --------------
  const [newDetails, setNewDetails] = useState({
    _id: "",
    admission: "",
    gender: "",
    bloodGroup: "",
    emergencyContact: "",
    address: "",
  });

  // console.log(newDetails);

  const sendNewDetails = (e) => {
    const { name, value } = e.target;
    setNewDetails({
      ...newDetails,
      [name]: value,
    });
    setExtraDetails(e.target.value)
  };
  // Handling of form input state
  const handleSubmit = () => {

    setTimeout(() => {
      setReadInput(true);
      setIsDisabled(true)
    }, 200);
  };

  const handleUpdate = () => {
    if (readInput === true) {
      setReadInput(false);
    }
    setIsDisabled(false)
  };

  const formSubmit = async (e) => {
    e.preventDefault();

    await axios
      .patch(`http://localhost:4400/api/user/login/${userid}`, newDetails)
      .then((res) => {
        console.log(res.data.message);
        console.log(newDetails);
      });

    getExtraDetails();
    // console.log(newDetails)
  };

  return (
    <div className="update-user-form">
      <form action="" className="extra-form-data" onSubmit={formSubmit}>
        <input
          type="text"
          name="admission"
          placeholder="Admission"
          value={extraDetails.admission}
          onChange={sendNewDetails}
          readOnly={readInput}
        />
        <br />
        <input
          type="text"
          name="gender"
          placeholder="Gender"
          onChange={sendNewDetails}
          value={extraDetails.gender}
          readOnly={readInput}
        />
        <br />

        <input
          type="text"
          name="bloodGroup"
          placeholder="Blood Group"
          onChange={sendNewDetails}
          value={extraDetails.bloodGroup}
          readOnly={readInput}
        />
        <br />
        <input
          type="number"
          name="emergencyContact"
          placeholder="Emergency Contact No"
          onChange={sendNewDetails}
          value={extraDetails.emergencyContact}
          readOnly={readInput}
        />
        <br />
        <textarea
          type="address"
          name="address"
          rows="5"
          placeholder="Address"
          onChange={sendNewDetails}
          value={extraDetails.address}
          readOnly={readInput}
        ></textarea>
        <br />

        <div className="update-btn">
          <button type="" onClick={handleUpdate}>
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
