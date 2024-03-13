import React from 'react';
import Nav from './nav'
import {NavLink} from 'react-router-dom';
export default function home(){
    return(
        <div className='min-w-[100vh] min-h-[100vh] flex flex-col items-center'>
           <div className=' w-[95%] h-[7vh] bg-main'>
            <Nav/>
           </div>
           <div className=' w-[100%] h-[93vh] flex items-center justify-center'>
            <div className='w-[98%] h-[98%] bg-white banner3 rounded-md shadowb flex flex-col justify-end'>
             <div className=' w-[100%] h-[40%] flex items-center justify-evenly '>
                <div className='bg-main w-[30%] h-[70%] shadowb rounded-md transaction-home'></div>
                <div className='bg-main w-[30%] h-[70%] shadowb rounded-md transaction-home'></div>
                <div className='bg-main w-[30%] h-[70%] shadowb rounded-md transaction-home'></div>
             </div>
            </div>
           </div>
        </div>
    )
}