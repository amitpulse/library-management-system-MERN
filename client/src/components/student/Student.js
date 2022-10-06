import React, { useEffect } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import '../student/Student.css'


const Student = () => {
  const {user, dispatch} = useAuthContext()

  useEffect(() => {
    const fetchuser = async () => {
      const response = await fetch('/api/user',{
        headers:{
          'Authorization': `Bearer ${user.token}`
        }
      })
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'LOGIN', payload: json})
      }
    }

    if(user){
      
      fetchuser()
    }
  }, [user, dispatch])

  return (

    <div className="main-info">
      <div className="user-image">
        <img src="" alt="" />
      </div>

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
