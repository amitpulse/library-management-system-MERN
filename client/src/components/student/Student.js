import React from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import '../student/Student.css'


const Student = () => {
  const {user} = useAuthContext()
  return (

    <div className="main-info">

        <h4>Full Name : <span>{user.userName}</span></h4>
        <h4>Email : <span>{user.email}</span></h4>
        <h4>Student ID : <span>{user.studentID}</span></h4>
        <h4>Contact No : <span>{user.contactNum}</span></h4>
        <h4>Department : <span>{user.department}</span></h4>
        <h4>Year : <span>{user.year}</span></h4>
        </div>
  );
};

export default Student;
