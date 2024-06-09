import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddProduct from './AddProduct';
import Home from './Home';
import UpdateProduct from './UpdateProduct';
import ViewAllProduct from './ViewAllProduct';
import DeleteProduct from './DeleteProduct';
import Card from './Card';
import Login from './Login'
import SellerRegistration from './SellerRegistration';
import SellerHome from './Seller/SellerHome';
import Seller from './Seller/Seller';
import ProductListing from './Seller/ProductListing';
import { ToastContainer } from 'react-toastify';
import Dashboard from './Home/DashBoard';
import Admin from './Admin/Admin';
import AdminLogin from './Admin/AdminLogin';
function App() {

  return (
    <div className="App"> 
      {/* <DisplayingDataAPI/> */}
      <Router>
      <ToastContainer toaster-options="{'time-out': 3000, 'close-button':true, 'position-class':'toast-top-full-width'}">
        
        </ToastContainer>
        <Routes>
        <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path='/seller/*' element={<Seller/>}/>
          <Route path='/adminlogin' element={<AdminLogin/>}/>
          <Route path="/admin/*" element={<Admin/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
