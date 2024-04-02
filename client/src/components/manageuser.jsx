import React, { useEffect, useState } from 'react'
import { api } from '../utils/api'
import { toast } from 'react-toastify'
import ReactModal from 'react-modal';
function manageuser() {
const [value,setValue]=useState([])
const[ismodel,setModel]=useState(false)
    const isOpen  = () => setModel(true);
    const isClose  = () => setModel(false);
const handledelete=(data)=>{
  console.log(data)
  api.post("/admin/manageuser/delete",data)
  .then((res)=>{
    toast.success(res.data),console.log(res.data)})
  .catch((err)=>{console.log(err)})
}
  useEffect(()=>{
     api.get("/admin/manageuser")
     .then((res)=>{
      setValue(res.data)
      
      console.log(res.data)})
     .catch((err)=>{console.log(err)})
  },[])
  
  return (
    <div className='w-[99%] h-[99%]  grid grid-cols-3 banner4    '>
      <ReactModal isOpen={true} ariaHideApp={false} style={{
        overlay: {
            backgroundColor: 'rgba(0,0,0,0.4)',
            zIndex: 9
        }, content: {
            background:'transparent',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            width: '550px',
            height: '550px',
            top: '50%',
            left: '65%',
            transform: 'translate(-50%, -50%)',
            border:'none'
          }
       
    }} >
        
      <div className='w-[250px] h-[200px] bg-white  bd-box flex flex-col justify-evenly'>
        <div className='w-[100%] h-[60%] bg-black'></div>
        <div className='w-[100%] h-[40%] flex'>
          <div className='w-[30%] h-[50%] red'>delete</div>
          <div className='w-[50%] h-[50%]'>cancel</div>
        </div>
      </div>
    </ReactModal>
      {value.map((items,index)=>{
     return <div key={index} className='w-[250px] h-[300px] flex flex-col  bg-white mt-4 bd-box banner3 '>
 <div  className='w-[100%] h-[40%] flex justify-center '>
       <img className='w-[50%] h-[100%] mt-2 shadowb'/>
    </div>
    <div className='w-[100%] h-[30%] flex  justify-evenly items-center text-black  flex-col mt-4 bg-white'>
    <p className='w-[70%] h-[25%] start mt-6'>Id: 00{index+1}</p>
    <p className='w-[70%] h-[25%] start'>Name:  {items.username}</p>
    <p className='w-[70%] h-[25%] start'>Role:  {items.role}</p>
    </div>
    <div className='w-[100%] h-[30%] flex  justify-center items-end bg-white'>
     <button  className='w-[45%] h-[30%]  text-center text-black mb-4  bd-box mr-2'>Edit</button>
     <button className='w-[45%] h-[30%] text-center mb-4 text-white bd-box red' onClick={()=>isOpen()} >Delete</button>
    </div>
   </div>})}
    </div>
  )
}

export default manageuser