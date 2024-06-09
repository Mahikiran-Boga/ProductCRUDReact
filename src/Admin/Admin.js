
import AdminNavBar from './AdminNavBar';
import AdminHome from './AdminHome';
import { Routes,Route } from 'react-router-dom';
import AdminLogin from './AdminLogin';
import AddProduct from './Addproduct';
import DeleteProduct from './DeleteProduct';
import ViewAllUsers from './ViewAllUsers';
import ViewAllSellers from './ViewallSellers';
import ViewAllOrders from './ViewAllOrders';

export default function(){
    return(
   
        <div>
            <AdminNavBar/>
         <Routes>
         <Route path='/admin/adminhome/' element={<AdminHome/>}/>
         <Route path='/admin/addproduct' element={<AddProduct/>}/>
         <Route path='/admin/deleteproduct' element={<DeleteProduct/>}/>
         <Route path='/admin/viewallusers' element={<ViewAllUsers/>}/>
         <Route path='/admin/viewallsellers' element={<ViewAllSellers/>}/>
         <Route path='/admin/viewallorders' element={<ViewAllOrders/>}/>
         <Route path='/adminlogin' element={<AdminLogin/>}/>
         </Routes>
        </div>


    )
    
    ;

}