
import React from 'react';
import {Routes,Route} from 'react-router-dom';
import BasicNavBar from './BasicNavBar';
import WelcomeHome from './WelcomeHome';

export default function BasicNav(){
    return(

        <div>
        <BasicNavBar/>
         <Routes>
          <Route path="/" element={<WelcomeHome/>}/>
          <Route path='/products' element={<Products/>}/>

         </Routes>

        </div>
    );
}