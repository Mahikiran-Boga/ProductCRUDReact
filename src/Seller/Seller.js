import React from 'react';
import {Routes,Route} from 'react-router-dom';
import SellerNavBar from './SellerNavBar';
import AddListing from './AddListing';
import EditListing from './EditListing';
import ViewAllOrders from './ViewAllOrders';
import Login from '../Login';
import SellerHome from './SellerHome';
export default function Seller()
{
    return (
   <div>
    <SellerNavBar/>
    <Routes>
      <Route Path='/sellerhome' element={<SellerHome/>}/>
      <Route path='/addlisting' element={<AddListing/>} />
      <Route path='/editlisting' element={<EditListing/>}/>
      <Route path='/viewallorders' element={<ViewAllOrders/>}/>
      <Route path='/dashboard/login' element={<Login/>}/>
     <Route>
     </Route>
    </Routes>
   </div>
    );
}