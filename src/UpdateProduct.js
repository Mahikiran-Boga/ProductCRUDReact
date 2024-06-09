import React, { useEffect } from "react"
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
export default function UpdateProduct()
{
    const[pid,setPid]=useState(0);
    const[pname,setPname]=useState("");
    const[pcategory,setPcategory]=useState("");
    const[pprice,setPprice]=useState(0.0);
    const[pmanufracturer,setPManufacturer]=useState("");
    const[pyear,setPyear]=useState(0);
    const navigate=useNavigate();
    const{prodid}=useParams();
    useEffect(()=>{
     axios.get(`http://localhost:2024/viewproductbyid?id=${prodid}`)
     .then((res)=>{
        const proddata=res.data;
        setPid(proddata.pid);
        setPname(proddata.pname);
        setPcategory(proddata.pcategory);
        setPprice(proddata.pprice);
        setPManufacturer(proddata.pmanufracturer);
        setPyear(proddata.pyear);
     }).catch((err)=>{
        console.log(err.message);
     })

    },[]);

   //const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const prodData={pid,pname,pcategory,pprice,pmanufracturer,pyear};
         axios.put("http://localhost:2024/updateproduct",prodData,{
          headers:{"Content-Type":"application/json"}
         }).then((res)=>{
            //alert("Product Updated Successfully");
            navigate("/viewallproducts");
         }).catch((err)=>{
            console.log(err.message);
         })
    }
    return(
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
        <h3>Update Product</h3>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-box">
            <label>Product ID</label>
            <input
              type="number"
              
              placeholder="Enter Product ID" value={pid} 
              required
            />
          </div>
          <div className="input-box">
            <label>Product Name</label>
            <input
              type="text" value={pname} onChange={(e)=>setPname(e.target.value)}
              
              placeholder="Enter Product Name"
              required
            />
          </div>
          <div className="input-box address">
            <div className="column">
              <div className="select-box">
                <select value={pcategory} onChange={(e)=>{setPcategory(e.target.value)}}>
                  <option hidden>Product Category</option>
                  <option>Electronics</option>
                  <option>Food</option>
                  <option>Clothing</option>
                  <option>Groceries</option>
                </select>
              </div>
            </div>
          </div>
          <div className="input-box">
            <label>Product Manufacturer</label>
            <input
              type="text" value={pmanufracturer} onChange={(e)=>{setPManufacturer(e.target.value)}}
             
              placeholder="Enter Product Manufacturer"
              required
            />
          </div>
          <div className="column">
            <div className="input-box">
              <label>Product Price</label>
              <input
                type="number" value={pprice} onChange={(e)=>{setPprice(e.target.value)}}
              
                placeholder="Enter Product Price"
                required
              />
            </div>
            <div className="input-box">
              <label>Product Year</label>
              <input
                type="number" value={pyear} onChange={(e)=>{setPyear(e.target.value)}}
              
                placeholder="Enter Product Year"
                required
              />
            </div>
          </div>
          <button type="submit" >Submit</button>
        </form>
      </section>
    </div>
       
    
    );
}