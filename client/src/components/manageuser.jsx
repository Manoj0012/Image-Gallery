import React, { useEffect } from 'react'
import { api } from '../utils/api'

function manageuser() {
const values={name:"",role:''}
  useEffect(()=>{
     api.get("/admin/manageuser")
     .then((res)=>{
      values.name=res.data.username
      values.role=res.data.role
      console.log(res.data)})
     .catch((err)=>{console.log(err)})
  })
  return (
    <div className='w-[250px] h-[300px] flex flex-col  bg-white mt-4 bd-box banner3 '>
     <div className='w-[100%] h-[40%] flex justify-center '>
        <img className='w-[50%] h-[100%] mt-2 shadowb'/>
     </div>
     <div className='w-[100%] h-[30%] flex  justify-evenly items-center text-black  flex-col mt-4 bg-white'>
     <p className='w-[70%] h-[25%] start mt-6'>Id:{values.name}</p>
     <p className='w-[70%] h-[25%] start'>Name:{}</p>
     <p className='w-[70%] h-[25%] start'>Role:{}</p>
     </div>
     <div className='w-[100%] h-[30%] flex  justify-center items-end bg-white'>
      <div  className='w-[45%] h-[30%]  text-center text-black mb-4  bd-box mr-2'>Edit</div>
      <div className='w-[45%] h-[30%] text-center mb-4 text-white bd-box red'>Delete</div>
     </div>
    </div>
  )
}

export default manageuser