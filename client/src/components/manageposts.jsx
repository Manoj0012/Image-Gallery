import React, { useEffect, useState } from 'react'
import { api } from '../utils/api'
import { toast } from 'react-toastify'
import ReactModal from 'react-modal';
function manageposts() {
  const [data,setData]=useState([]);
  const[ismodel,setModel]=useState(false)
    const isOpen  = () => setModel(true);
    const isClose  = () => setModel(false);
    const handledelete=(data)=>{
      api.post("/admin/managepost/delete",{_id:data})
      .then((res)=>{
        toast.success(res.data),console.log(res.data),
      isClose()
    })
      .catch((err)=>{console.log(err)})
    }
    useEffect(()=>{
      api.get("/admin/managepost")
      .then((res)=>{
       setData(res.data)
       console.log(res.data)})
      .catch((err)=>{console.log(err)})
   },[])
  return (
<div className='w-[99%] h-[99%]  grid grid-cols-2 gap-2 banner5 over    '>
{data.map((items,index)=>{
    return  <div key={index}
      className='w-[300px] h-[250px] flex flex-col justify-evenly items-center bg-white m-4 bd-box '>
            <ReactModal isOpen={ismodel} ariaHideApp={false} style={{
        overlay: {
            backgroundColor: 'rgba(0,0,0,0.1)',
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
          <button onClick={()=>handledelete(items._id)} className='w-[35%] h-[50%] red flex items-center justify-center bd-box text-white'>delete</button>
          <button onClick={isClose} className='w-[35%] h-[50%] flex items-center justify-center bd-box'>cancel</button>
        </div>
      </div>
    </ReactModal>
      <div className='w-[95%] h-[70%] mt-2 banner flex justify-end'>
          <img src={items.image.file_data} className='w-[100%] h-[100%] flex '/>
          
      </div>
      <div className='w-[95%] h-[30%] flex flex-col justify-center items-center'>
        <p className=' 1 w-[100%] h-[20%] text-black text-center '>{items.caption}</p>
        <div className='2 w-[100%] h-[50%] text-black flex items-center'>
        <p className='3 w-[100%] h-[100%] flex'>By:<p className='ml-5 w-[60%] h-[100%]'>{items.owner}</p>
        <button className='w-[60px] h-[40px] menu green bd-box text-white' onClick={isOpen}>Edit</button></p>
        </div>
      </div>
  </div>
})}



</div>
  )
}

export default manageposts