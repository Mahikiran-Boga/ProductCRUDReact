import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'

export default function AddListing() {
  const [pid, setPid] = useState("");
  const [pname, setPname] = useState("");
  const [pcategory, setPcategory] = useState("");
  const [pprice, setPPrice] = useState(0);
  const [pmanufracturer, setPManufacturer] = useState("");
  const [pyear, setPyear] = useState(0);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const prodData = {
      pid,
      pname,
      pcategory,
      pprice,
      pmanufracturer,
      pyear,
    };

    axios.post("http://localhost:2024/addproduct", prodData, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        console.log(res.data); // Log the response data
        navigate("/addproduct");
        toast.success("Added Successfully");
        navigate("/addproduct");
       
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

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
        <h3>Create a Listing</h3>
        <form onSubmit={handleSubmit} className="form">
          <div className="input-box">
            <label>Product ID</label>
            <input
              type="number"
              value={pid}
              onChange={(e) => setPid(e.target.value)}
              placeholder="Enter Product ID"
              required
            />
          </div>
          <div className="input-box">
            <label>Product Name</label>
            <input
              type="text"
              value={pname}
              onChange={(e) => setPname(e.target.value)}
              placeholder="Enter Product Name"
              required
            />
          </div>
          <div className="input-box address">
            <div className="column">
              <div className="select-box">
                <select
                  value={pcategory}
                  onChange={(e) => setPcategory(e.target.value)}
                >
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
              type="text"
              value={pmanufracturer}
              onChange={(e) => setPManufacturer(e.target.value)}
              placeholder="Enter Product Manufacturer"
              required
            />
          </div>
          <div className="column">
            <div className="input-box">
              <label>Product Price</label>
              <input
                type="number"
                value={pprice}
                onChange={(e) => setPPrice(e.target.value)}
                placeholder="Enter Product Price"
                required
              />
            </div>
            <div className="input-box">
              <label>Product Year</label>
              <input
                type="number"
                value={pyear}
                onChange={(e) => setPyear(e.target.value)}
                placeholder="Enter Product Year"
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
