import React, { useState } from 'react'
import { api } from '../utils/api'
import { toast } from 'react-toastify'
import ReactModal from 'react-modal';
function manageposts(data) {
  const value=[1,2,4,5,6]
  const[ismodel,setModel]=useState(false)
    const isOpen  = () => setModel(true);
    const isClose  = () => setModel(false);
  return (
<div className='w-[99%] h-[99%]  grid grid-cols-2 gap-2 banner4    '>
{value.map((items,index)=>{
    return  <div key={index}
      className='w-[400px] h-[350px] flex flex-col justify-evenly items-center bg-white m-4 bd-box '>
            <ReactModal isOpen={ismodel} ariaHideApp={false} style={{
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
        
      <div className='w-[250px] h-[150px] bg-white  bd-box flex flex-col justify-evenly'>
        <div className='w-[100%] h-[60%] flex justify-center items-center'>
          <p>Are you sure?</p>
        </div>
        <div className='w-[100%] h-[40%] flex justify-evenly items-center'>
          <button onClick={()=>handledelete(items)} className='w-[35%] h-[50%] red flex items-center justify-center bd-box'>delete</button>
          <button onClick={isClose} className='w-[35%] h-[50%] flex items-center justify-center bd-box'>cancel</button>
        </div>
      </div>
    </ReactModal>
      <div className='w-[95%] h-[70%] mt-2 banner6 flex justify-end'>
          <div className='w-[25px] h-[50px] flex justify-center items-center'>a</div>
      </div>
      <div className='w-[95%] h-[30%] flex flex-col justify-center items-center'>
        <p className='w-[100%] h-[20%] text-black text-center '>#Image</p>
        <div className='w-[100%] h-[50%] text-black flex items-center'>
        <p className='w-[100%] h-[100%]'>By:<p className='ml-5'>sample</p></p>
        </div>
      </div>
  </div>
})}



</div>
  )
}

export default manageposts