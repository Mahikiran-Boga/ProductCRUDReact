
import { useState } from "react";
import React from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Features() {
   
  const[id,setId]=useState("");
  const[name,setName]=useState("");
  const[company,setCompany]=useState("");
  const[contact,setContact]=useState("");
  const[email,setEmail]=useState("");
  const[username,setUsername]=useState("");
  const[password,setPassword]=useState("");
  const[message,setMessage]=useState("");

  const sellerData={id,name,company,contact,email,username,password};
  const navigate=useNavigate()
  const handleSubmit=(e)=>{
     e.preventDefault();
     axios.post("http://localhost:2024/sellerRegistration",sellerData,{
     headers:{'ContentType':'application/json'}
     }).then((res)=>
     {
        setMessage(res.data);
        navigate("login");
     }).catch((err)=>{
      console.log(err.message);
     })

  }
  
  return (
    <div style={{ 
      backgroundColor:'lightblue'
      ,minHeight: "100vh", // Set min height to ensure the background image covers the entire screen
      backgroundSize: "cover", // Adjust background size if needed
      backgroundRepeat: "no-repeat", // Adjust background repeat if needed
      marginTop:'0px'
    }}>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <section className="container">
        <h3>Seller Registration</h3>
        <p style={{color:"green"}}>{message}</p>
        <form  className="form" onSubmit={handleSubmit}>
          <div className="input-box">
            <label>Seller ID</label>
            <input
              type="number"  
              value={id}
              onChange={(e)=>{setId(e.target.value)}}
              placeholder="Enter Seller ID"
              required
            />
          </div>
          <div className="input-box">
            <label>Seller Name</label>
            <input
              type="text"
              value={name} 
              onChange={(e)=>{setName(e.target.value)}}
              placeholder="Enter Seller Name"
              required
            />
          </div>
         
          <div className="input-box">
            <label>Seller Company</label>
            <input
              type="text"
               value={company}
               onChange={(e)=>{setCompany(e.target.value)}}
              placeholder="Enter Company Name"
              required
            />
          </div>
          <div className="input-box">
            <label>Seller UserName</label>
            <input
              type="text" value={username}
              onChange={(e)=>{setUsername(e.target.value)}}
              placeholder="Enter User Name "
              required
            />

          </div>
          <div className="input-box">
            <label>Seller Password</label>
            <input
              type="password"  value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
              placeholder="Enter Password"
              required
            />
            </div>
          <div className="column">
            <div className="input-box">
              <label>Seller Email</label>
              <input
                type="email"   value={email}    
                onChange={(e)=>{setEmail(e.target.value)}}            
                placeholder="Enter Email Address"
                required
              />
            </div>
            <div className="input-box">
              <label>Seller Contact</label>
              <input
                type="number"   value={contact}
                onChange={(e)=>{setContact(e.target.value)}}
                
                placeholder="Enter Contact Number"
                required
              />
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
}
