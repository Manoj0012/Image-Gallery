import React, { useState } from 'react'
import { api } from '../utils/api'

function addadmin() {
 const [name,setName]=useState('')
 const [Pass,setPass]=useState('')
 const values={
  Name:name,
  password:Pass
 }
const handlesubmit=()=>{api.post("/admin/addadmin",values)
.then((res)=>{console.log(res)
.catch((err)=>{console.log(err)})})}

  return ( 
    <div className='w-[400px] h-[500px]   bd-box flex flex-col bg-slate-700 opacity-80 justify-center items-center '>
      <div className='w-[100%] h-[20%] text-center text-white font1'>Welcome</div>
      <div className='w-[90%] h-[45%] flex flex-col justify-evenly items-end'>
        <label  className='w-[100%] h-[10%] text-white'>Name</label>
        <input className='w-[100%] h-[20%] bd-box' type='text' onChange={(e)=>{setName(e.target.value)}}/>
        <label className='w-[100%] h-[10%] text-white'>Password</label>
        <input className='w-[100%] h-[20%] bd-box' type='text' onChange={(e)=>{setPass(e.target.value)}}/>
      </div>
      <div className='w-[100%] h-[30%] flex justify-evenly items-end'>
        <div className='w-[45%] h-[25%] text-center flex justify-center items-center bg-white mb-5 bd-box' onClick={handlesubmit}>ADD</div>
      </div>
    </div>
  )
}

export default addadmin