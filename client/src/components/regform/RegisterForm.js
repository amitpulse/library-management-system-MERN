import React, { useState } from 'react'
import '../regform/Registerform.css'
import { Link } from "react-router-dom";
import { useSignup } from '../../hooks/useSignup';

const RegisterForm = () => { 
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [studentID, setStudentID] = useState('');
  const [contactNum, setContactNum] = useState('');
  const [department, setDepartment] = useState('');
  const [year, setYear] = useState('');

  // useSignup hook
  const {signup, error, isLoading} = useSignup();
  
  const handleSubmit = async (e) => {
    e.preventDefault()

   await signup(email, password)
  }
  return (
    <div className='register'>

        <h2>STUDENT REGISTRATION</h2>
        
        <form action="" className='reg-form' onSubmit={handleSubmit}>
            <input type="text" placeholder='Full Name' onChange={(e) => setUsername(e.target.value)} value={username}/><br />
            <input type="email" placeholder='Email'  onChange={(e) => setEmail(e.target.value)} value={email}/><br />
            <input type="password" placeholder='Password'  onChange={(e) => setPassword(e.target.value)} value={password}/><br />
            <input type="number" placeholder='Student ID'  onChange={(e) => setStudentID(e.target.value)} value={studentID}/><br />
            <input type="tel" placeholder='Contact Number'   onChange={(e) => setContactNum(e.target.value)} value={contactNum}/><br />
            <input type="text"  placeholder='Department'   onChange={(e) => setDepartment(e.target.value)} value={department}/><br />
            <input type="date"  placeholder='Year'   onChange={(e) => setYear(e.target.value)} value={year}/><br />
            {error && <div className='error'>{error}</div>}

            <button disabled={isLoading}>Register</button>
         
            <p>Already a member? <Link><strong>Log In</strong></Link></p>
        </form>
        
      
    </div>
  )
}

export default RegisterForm
