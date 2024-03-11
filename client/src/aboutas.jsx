import React from 'react';
import Nav from './nav';
import {NavLink} from 'react-router-dom';
export default function about(){
    return(
        <div className='min-w-[100vh] min-h-[100vh] flex flex-col items-center'>
        <div className=' w-[95%] h-[7vh] bg-main'>
         <Nav/>
        </div>
        <div className=' w-[100%] h-[93vh] flex items-center justify-center'>
         <div className='w-[98%] h-[98%]  bd-box banner4'></div>
        </div>
     </div>
    )
}