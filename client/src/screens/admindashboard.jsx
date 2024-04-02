import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Manageuser from '../components/manageuser';
import Postcard from '../components/postcard';
import Manageposts from '../components/manageposts';
import { api } from '../utils/api';
import Addadmin from './addadmin';
import { toast } from 'react-toastify';

function admindashboard() {
    const [name,setName]=useState('')
    const controlbar=[{title:"My Post",state:"My Post"}, {title:"Manage user",state:"Manage User"}, {title:"Manage Post",state:"Manage Post"}, {title:"Add Admin",state:"Add Admin"}]
    const[state,SetState]=useState("My Post");
    const profiledata=[1,2,3,4,5]
    console.log(state)
    const handlelogout=()=>{
        localStorage.removeItem("token")
        nav("/")
    }
    useEffect(()=>{
        api.post('/user/check')
        .then((res)=>{
            const data=res.data
            if(data=='invalid'){
                toast.error("Unauthorized access")
                nav("/login")
            }
            else {
                
                if(data.role=="user"){
                 nav("/user")
                 toast.error("Only admin can access")
                }
                else{
                    var values=res.data
                console.log(values)
                setName(values.username)
                }
            }
        })
        .catch((err)=>{console.log(err)})

    })
   
  return (
    <div className='min-w-[100vh] min-h-[100vh] banner5 flex '>
       <div className='w-[25%] h-[100vh]  flex flex-col justify-evenly    banner5 Borderl'>
        <div className='w-[100%] h-[20%] '>
            <div className='w-[100%] h-[80%] '></div>
            <div className='w-[100%] h-[20%] flex justify-center items-center'>
                <img className='w-[150px] h-[120px] bg-white shadowb '></img>
            </div>
        </div>
        <div className=' w-[100%] h-[65%] flex items-center justify-evenly'>
            <div className='w-[95%] h-[95%] flex flex-col  mt-9'>
                <div className='w-[100%] h-[20%] flex justify-center items-center'>
                    <p className='font1 text-center text-white'>Hi, {name}</p>
                </div>
                <div className='w-[100%] h-[40%] flex flex-col  justify-evenly items-center text-white'>
                   {controlbar.map((items,index)=>{return(<button className='w-[60%] h-[50%] bd-box Border mt-7' key={index} onClick={()=>SetState(items.state)}>{items.title}</button>)})}
                </div>
            </div>
        </div>
        <div className='w-[100%] h-[10%] flex justify-center items-center '>
            <button className='logout w-[60%] h-[50%] bg-black bd-box text-white red' onClick={handlelogout}>Logout</button>
        </div>
       </div>
       <div className='w-[75%] h-[100vh] bg-white'>
           <div className='w-[99%] h-[20%] flex justify-center items-end banner5 ml-1 bd-box'>
            <p className='text-white font1 mb-4'>{state}</p>
           </div>
           <div className='w-[100%] h-[80%]  flex  justify-center items-center bg-white   '>
           {state=="My Post"&&<div className='w-[99%] h-[99%]  bd-box grid grid-cols-2 gap-2 justify-items-center bg-white  over banner5 '>
           {profiledata.map((items,index)=>{
            return(<Postcard key={index}/>)
           })}
              </div>}
              {state=="Manage User"&&
           <Manageuser/>}
              {state=="Manage Post"&&<div className='w-[99%] h-[99%]  bd-box grid grid-cols-2 gap-2 justify-items-center bg-white over banner5'>
           {profiledata.map((items,index)=>{
            return(<Manageposts key={index}/>)
           })}
              </div>}
              {state=="Add Admin"&&<div className='w-[99%] h-[99%]  bd-box flex justify-center items-center bg-white over banner5 '>
           <Addadmin/>
              </div>}
           </div>
       </div>
    </div>
  )
}

export default admindashboard