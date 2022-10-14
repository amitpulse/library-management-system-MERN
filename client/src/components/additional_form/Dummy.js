import "../Profile.css";
import axios from "axios";
import React, { useEffect, useContext } from "react";
import img from "../../../Asserts/sample.png";
import Calendar from "react-calendar";
import { useState } from "react";
import { Link } from "react-router-dom";

//---------------------------------------------------------------------------------------------

const ProfileHero = () => {
  //calendar function
  const [value, onChange] = useState(new Date());

  //--------------------------------------------------------------------------------------------
  //image upload
  //---------------------------------------------------------------------------------------------
  //getting data from an api
  let gettinguser = JSON.parse(localStorage.getItem("employee"));
  let empid = gettinguser.data.user._id;

  const [details, setDetails] = useState("");
  // get request
  const getdetails = async () => {
    const response = await axios.get(
      `http://localhost:4000/api/employee/${empid}`
    );
    setDetails(response.data);
  };
  useEffect(() => {
    getdetails();
  }, []);
  //----------------------------------------------------------------------
  //update req
  const [basicdetail, setbasicdetail] = useState({
    _id: null,
    role: "",
    DOB: "",
    department: "",
    preaddress: "",
    location: "",
    pnumber: "",
  });

  const collectdata = (e) => {
    const { name, value } = e.target;
    setbasicdetail(
      {
        // ...basicdetail,
        [name]: value,
      }

      // setbasicdetail(e.target.value)
    );
    // getdetails()
    // console.log(basicdetail);
    setDetails(e.target.value);
  };

  const updatedetail = async (e) => {
    e.preventDefault();

    await axios
      .patch(`http://localhost:4000/api/employee/${empid}`, basicdetail)
      .then((res) => {
        console.log(res.data.message);
      });
    getdetails();
  };

  //edit change
  const [readonly, setReadonly] = useState(true);
  const editbtn = () => {
    if (readonly === true) {
      setReadonly(false);
    }
  };
  const savebtn = () => {
    if (readonly === false) {
      setReadonly(true);
    }
  };
  //-------------------------------------------------------------------------
  return (
    <div>
      <div>
        <div className="auth-details">
          <div className="top">
            <div className="top-left">
              <form onSubmit={updatedetail}>
                <input type="file" name="image" />
                {/* <button type="submit">Submit</button> */}

                <div className="details">
                  <pre>
                    <p>
                      Full Name :{" "}
                      <input
                        type="text"
                        value={details.name}
                        readOnly={readonly}
                      />
                    </p>
                    <p>
                      Email :{" "}
                      <input
                        type="text"
                        value={details.email}
                        readOnly={readonly}
                      />
                    </p>
                    <p>
                      Employee ID :{" "}
                      <input
                        type="text"
                        value={details.emp_id}
                        readOnly={readonly}
                      />{" "}
                    </p>
                    <p>
                      Contact :{" "}
                      <input
                        type="text"
                        value={details.emgcontact}
                      />
                    </p>
                    <p>
                      Department :{" "}
                      <input
                        type="text"
                        value={details.dept}
                        readOnly={readonly}
                      />
                    </p>
                  </pre>
                </div>
              </form>
            </div>

            <div className="top-right">
              <div className="basic-info">
                <h1>BASIC INFORMATION</h1>
                <button onClick={editbtn}>Edit</button>
              </div>
              <div>
                <form onSubmit={updatedetail}>
                  <div className="form-inside">
                    <input
                      type="text"
                      placeholder="Role"
                      name="role"
                      onChange={collectdata}
                      value={details.role}
                      readOnly={readonly}
                    />
                    <input
                      type="text"
                      placeholder="Date of Birth"
                      name="dob"
                      onChange={collectdata}
                      value={details.dob}
                      readOnly={readonly}
                    />
                  </div>

                  <div className="form-inside">
                    <input
                      type="text"
                      placeholder="Department"
                      name="dept"
                      onChange={collectdata}
                      value={details.dept}
                      readOnly={readonly}
                    />
                    <input
                      type="text"
                      placeholder="Present Address"
                      name="address"
                      onChange={collectdata}
                      value={details.address}
                      readOnly={readonly}
                    />
                  </div>
                  <div className="form-inside">
                    <input
                      type="text"
                      placeholder="Location"
                      name="location"
                      onChange={collectdata}
                      value={details.location}
                      readOnly={readonly}
                    />
                    <input
                      type="tel"
                      placeholder="Contact No"
                      name="emgcontact"
                      onChange={collectdata}
                      value={details.emgcontact}
                      readOnly={readonly}
                    />
                  </div>
                  <button type="submit" onClick={savebtn}>
                    save
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="bottom">
            <div className="leaves">
              <div className="count">
                <p>01/10</p>
              </div>
              <div className="leaves-taken">
                <h1>Leaves Taken</h1>
                <p>Leave taken on 25 Jan 2022</p>
                <p>Leave taken on 26 Jan 2022</p>
                <p>Leave taken on 27 Jan 2022</p>
              </div>
            </div>
            <div className="calendar">
              <Calendar onChange={onChange} value={value} />
            </div>
            <div className="weeks">
              <Link>TIMESHEET 1</Link>
              <Link>TIMESHEET 2</Link>
              <Link>TIMESHEET 3</Link>
              <Link>TIMESHEET 4</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHero;