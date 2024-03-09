import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Manageuser from './manageuser';

function admindashboard() {
    const controlbar=[
        {title:"Manage user",state:"Manage User"}, {title:"Manage Post",state:"Manage Post"}, {title:"Add Admin",state:"Add Admin"}
    ]
    const[state,SetState]=useState("Manage");
    const profiledata=[1,2,3,4,5]
    console.log(state)
    
  return (
    <div className='min-w-[100vh] min-h-[100vh] banner5 flex '>
       <div className='w-[35%] h-[100vh]  flex flex-col justify-evenly shadowb bg-black opacity-75 banner6 Borderl'>
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
                   {controlbar.map((items,index)=>{return(<button className='w-[60%] h-[50%] bd-box Border mt-7' key={index} onClick={()=>SetState(items.state)}>{items.title}</button>)})}
                </div>
            </div>
        </div>
        <div className='w-[100%] h-[10%] flex justify-center items-center '>
            <button className='logout w-[60%] h-[50%] bg-black bd-box text-white red'>Logout</button>
        </div>
       </div>
       <div className='w-[65%] h-[100vh] banner6'>
           <div className='w-[100%] h-[20%] flex justify-center items-end '>
            <p className='text-white font1 mb-4'>{state}</p>
           </div>
           <div className='w-[100%] h-[80%]  flex  justify-center items-center bg-white   '>
              <div className='w-[95%] h-[95%]  bd-box grid grid-cols-2 gap-2 justify-items-center banner5 over '>
           {/* {state="Manage User"&&<div> 
           {profiledata.map((items,index)=>{
            return(console.log(items))
           })}
            </div>  } */}
              </div>
           </div>
       </div>
    </div>
  )
}

export default admindashboard