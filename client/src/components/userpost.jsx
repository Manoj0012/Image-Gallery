import React, { useEffect, useState } from 'react'
import Postcard from './postcard'
import { api } from '../utils/api'
function userpost(prop) {
    const[data,setData]=useState([])
    const [name,setName]=useState()
    console.log("aa",name)
    useEffect(()=>{
    api.post("/user/userpost")
    .then((res)=>{console.log(res),setData(res.data)})
    .catch((err)=>{console.log(err)})
  },[])
        return (
    <div className='w-[100%] h-[97%] grid grid-cols-3 justify-items-center over Scroll'>
                         {data.map((items,index)=>{
                        return(<Postcard key={index} src={items.image.file_data} caption={items.caption} />)
                        })}
                        </div>
  )
}

export default userpost