
import  Nav from '../components/nav'
import Postcard from '../components/postcard'
import React,{ useEffect, useState } from 'react'
import { api } from '../utils/api';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
function gallery() {
  const [data,setData]=useState([])
  console.log(data)
  useEffect(()=>{
    api.get('/post/allpost')
    .then((res)=>{
      setData(res.data)
        })
    .catch((err)=>{console.log(err)})

},[])
  return (
    <div className='min-w-[100vh] min-h-[100vh] flex flex-col items-center '>
      <div className='w-[95%] h-[5vh]'><Nav/></div>
      <div className='w-[100%] h-[95vh] flex justify-center items-center '>
        <div className='w-[98%] h-[98%]  bd-box banner5 grid grid-cols-2  justify-items-center over Scroll '>
        {data.map((items)=>
          <Postcard key={items} caption={items.caption} src={items.image.file_data}/>
        )}
        </div>
      </div>
    </div>
  )
}

export default gallery