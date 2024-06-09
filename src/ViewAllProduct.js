import { useState,useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ViewAllProduct() {
  
  const navigate=useNavigate();
   
    const [prodData,setProdData]=useState([]);
     useEffect(()=>{
      axios.get("http://localhost:2024/viewallproducts")
      .then((res)=>{
        setProdData(res.data);
      }).catch((err)=>{
        console.log(err.message);
      })
     },[])
    
    const editFunction=(id)=>{
      navigate("updateproduct/"+id);
    }


    const deletefunction=(id)=>{
     
      if(window.confirm("Do you want to delete?")){
      axios.delete(`http://localhost:2024/deleteproduct?id=${id}`)
      .then((res)=>{
        //alert("Successfully Deleted !");
        window.location.reload();
      })
      .catch((err)=>{
        console.log(err.message);
      })
    }}



  return (
    

    <div style={{ 
      backgroundColor:'lightblue'
      ,minHeight: "100vh", // Set min height to ensure the background image covers the entire screen
      backgroundSize: "cover", // Adjust background size if needed
      backgroundRepeat: "no-repeat", // Adjust background repeat if needed
      marginTop:'0px'
    }}>
      
     
    <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
    <div style={{textAlign: "center"}}>

    <h2 style={{color:"black"}}>VIEW ALL PRODUCTS</h2>
    <Table striped bordered hover >
      <thead>
        <tr>
          <th>Product ID</th>
          <th>Product Name</th>
          <th>Category</th> 
          <th>Manufracturer</th> 
          <th>Price</th>
          <th>Year</th>
          <th>Edit</th>
          <th>Delete</th>
          
        </tr>
      </thead>
      <tbody>

      {

          prodData&&prodData.map((product)=>(
            <tr key={product.pid}>
            <td>{product.pid}</td>
            <td>{product.pname}</td>
            <td>{product.pcategory}</td>
            <td>{product.pmanufracturer}</td>
            <td>{product.pprice}</td>
            <td>{product.pyear}</td>
            <td><button className='editButton' onClick={()=>{editFunction(product.pid)}}>Edit</button></td>
            <td><button className='deleteButton'onClick={()=>{deletefunction(product.pid)}}>Delete</button></td>
          </tr>

          ))



      }


      </tbody>
    </Table>
    </div>    </div>
  );
}

export default ViewAllProduct;