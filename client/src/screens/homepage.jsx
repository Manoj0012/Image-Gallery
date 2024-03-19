import React, { useEffect } from 'react';
import Nav from '../components/nav'
import {NavLink} from 'react-router-dom';
import { api } from '../utils/api';
export default function home(){
    useEffect(()=>{
        console.log("ggg")
        api.get("/")
        .then((res)=>{
            console.log(res.data)
        })
    })
    return(
        <div className='min-w-[100vh] min-h-[100vh] flex flex-col items-center'>
           <div className=' w-[95%] h-[5vh] bg-main'>
            <Nav/>
           </div>
           <div className=' w-[100%] h-[95vh] flex items-center justify-center'>
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