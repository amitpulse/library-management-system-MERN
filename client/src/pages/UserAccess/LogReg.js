import React, { useState } from 'react'
import LoginForm from '../../components/loginform/LoginForm'
import RegisterForm from '../../components/regform/RegisterForm'
import StartNav from '../../components/startnav/StartNav'
import '../UserAccess/Logreg.css'

const LogReg = () => {
  const[isRegActive, setRegActive] = useState(false);
  const[isLogActive, setLogActive] = useState(true);
  
  function handleRegistration(){
    setRegActive(true);
    setLogActive(false);
  }

  function handleLogin(){

    setLogActive(true);
    setRegActive(false);

  }
  
  return (
    <div>
      <StartNav/>
 

    <div className='access-content'>

    <div className='access-btn'>
        <button onClick={handleRegistration}>STUDENT REGISTRATION</button>
        <button onClick={handleLogin}>STUDENT LOGIN</button>
      </div>

      <div className='forms'>
        {
          isRegActive ? <RegisterForm/> : null
        }
        {
          isLogActive ?   <LoginForm/> : null
        }
      
      </div>
    </div>
    
    </div>
  )
}

export default LogReg
