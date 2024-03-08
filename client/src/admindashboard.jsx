import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function admindashboard() {
    const controlbar=[
        {title:"Manage user",state:"user"}, {title:"Manage Post",state:"post"}, {title:"Add Admin",state:"addadmin"}
    ]
    const[state,SetState]=useState("")
    
  return (
    <div className='min-w-[100vh] min-h-[100vh] banner5 flex '>
       <div className='w-[35%] h-[100vh]  flex flex-col justify-evenly shadowb bg-slate-700 opacity-80'>
        <div className='w-[100%] h-[20%] '>
            <div className='w-[100%] h-[80%] '></div>
            <div className='w-[100%] h-[20%] flex justify-center items-center'>
                <img className='w-[150px] h-[120px] bg-white shadowb '></img>
            </div>
        </div>
        <div className=' w-[100%] h-[65%] flex items-center justify-evenly'>
            <div className='w-[95%] h-[95%] flex flex-col  mt-9'>
                <div className='w-[100%] h-[20%] flex justify-center items-center'>
                    <p className='font1 text-center text-white'>Hi, admin</p>
                </div>
                <div className='w-[100%] h-[40%] flex flex-col  justify-evenly items-center text-white'>
                   {controlbar.map((items,index)=>{return(console.log(items))})}
                </div>
            </div>
        </div>
        <div className='w-[100%] h-[10%] flex justify-center items-center '>
            <button className='w-[60%] h-[50%] bg-black bd-box text-white red'>Logout</button>
        </div>
       </div>
       <div className='w-[65%] h-[100vh] '>

       </div>
    </div>
  )
}

export default admindashboard