
import {Routes,Route} from 'react-router-dom';
import React from 'react';
import Home from '../Home';
import NavBar from '../NavBar';
import ViewAllProduct from '../ViewAllProduct';
import Card from '../Card';
import Login  from '../Login';
import SellerRegistration from '../SellerRegistration'
import AddProduct from '../AddProduct';
import UpdateProduct from '../UpdateProduct';
import DeleteProduct from '../DeleteProduct'
export default function Dashboard(){
    return(
        <div>
          <NavBar/>   
          <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/Viewallproducts" element={<ViewAllProduct/>} />
          <Route path="viewallproducts/updateproduct/:prodid" element={<UpdateProduct/>} />
          <Route path="/deleteproduct" element={<DeleteProduct />} />
          <Route path="/login" element={<Login />} />
          <Route path='/viewallproductstoBuy' element={<Card/>}></Route>
          <Route path='/sellerRegistration' element={<SellerRegistration/>}></Route>
          </Routes>
        </div>
    )
}

