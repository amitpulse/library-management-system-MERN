import React, { useState } from 'react'
import '../loginform/Loginform.css'
import { Link } from "react-router-dom";
import { useLogin } from '../../hooks/useLogin';
import {motion} from 'framer-motion'


const LoginForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    // using useLogin hook

    const {login, error, isLoading} = useLogin();
    
  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password);
  }
  return (
    <motion.div className='login'
    initial={{y:50, opacity:0}}
    animate={{y:0, opacity:1}}
    transition={{duration:0.5}}>
      
        <h2>STUDENT LOGIN</h2>
        <form action="" className='log-form' onSubmit={handleSubmit}>
        <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email}/><br />
         <input type="password" placeholder='Password'  onChange={(e) => setPassword(e.target.value)} value={password}/><br />
         {error && <div className='error-login'>{error}</div>}
         <button  disabled={isLoading}>Log In</button>
        <p>Not a member? <Link><strong>Register</strong></Link></p>
        </form>
       
      
    </motion.div>
  )
}

export default LoginForm
