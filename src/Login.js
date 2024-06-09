import React, { useState } from 'react';
import './Login.css'
import axios from 'axios';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const LoginForm = () => {
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const navigate=useNavigate();

   useEffect(()=>{
    sessionStorage.clear(); 
  })

  const validate=()=>{
     let res=true;
     if(email===''||email===null){
      res=false;
      toast.warning("Enter Email ID");
     }
     if(password==='' ||password===null){
      res=false;
      toast.warning("Enter Password");
     }
     return res;
  }


  const processLogin=(e)=>{
    e.preventDefault();
    if(validate()){
      axios.get(`http://localhost:2024/checksellerlogin?email=${email}`)
      .then((res)=>{
        if(Object.keys(res.data).length===0){
          toast.error("Invalid Email ID");
        }
        else{
          if(res.data.password===password){
            toast.success("Login Success");
            sessionStorage.setItem('sid',res.data.id);
            sessionStorage.setItem('semail',res.data.email);
            sessionStorage.setItem('suname',res.data.username);
            navigate("/seller/")
          }
          else{
            toast.error("Wrong Password");
          }
        }
      }).catch((err)=>{
        toast.error("Login Failed Due to"+err.message);
      });
      
    }
  }
 

  return (
    <div className="login-container">
      <form  className="login-form" onSubmit={processLogin}>
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="username">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
           onChange={(e)=>{setPassword(e.target.value)}}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
