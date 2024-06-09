import { useState } from "react";
import axios from "axios";

import React from "react";
import { useNavigate } from "react-router-dom";
export default function Features() {
  const[pid,setId]=useState("");
  //const navigate=useNavigate();
  const [message,setMessage]=useState("");
  const handleSubmit=(e)=>{
           e.preventDefault();
            axios.delete(`http://localhost:2024/deleteproduct?id=${pid}`)
            .then((res)=>{
                //alert("Deleted Successfully");
                setMessage(res.data);
                //navigate("/viewallproducts");
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
        <h3>Delete Product</h3>

        <form  className="form" onSubmit={handleSubmit}>
        {message && <p style={{color:"green"}}>{message}</p>}
        {window.location.reload}
          <div className="input-box">
            <label>Product ID</label>
            <input
              type="number"
              value={pid}
             onChange={(e)=>{setId(e.target.value)}}
              placeholder="Enter Product ID"
              required
            />
          </div>
          <button type="submit1">Delete</button>
        </form>
      </section>
    </div>
  );
}
