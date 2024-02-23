import React from 'react';
import Nav from './nav'
import {NavLink} from 'react-router-dom';
export default function home(){
    return(
        <div className='min-w-[100vh] min-h-[100vh] '>
           <div className=' w-[100%] h-[7vh] bg-main'>
            <Nav/>
           </div>
           <div className=' w-[100%] h-[93vh] flex items-center justify-center'>
            <div className='w-[98%] h-[95%] bg-white banner1 rounded-md shadowb flex flex-col justify-end'>
             <div className=' 2w-[100%] h-[40%] flex items-center justify-evenly'>
                <div className='bg-main w-[30%] h-[70%] shadowb rounded-md'></div>
                <div className='bg-main w-[30%] h-[70%] shadowb rounded-md'></div>
                <div className='bg-main w-[30%] h-[70%] shadowb rounded-md'></div>
             </div>
            </div>
           </div>
        </div>
    )
}