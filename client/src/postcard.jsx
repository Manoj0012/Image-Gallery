import React, { useState } from 'react'

function postcard(data) {
 
  const [caption,SetCaption]=useState("#image")
  return (
    <div className='w-[400px] h-[350px]  flex flex-col justify-evenly items-center bg-white m-4 bd-box '>
        <div className='w-[95%] h-[75%] bg-black banner6'></div>
        <div className='w-[95%] h-[20%] flex justify-center items-center'>
          <p className='w-[100%] h-[50%] text-black text-center '>{data.title}</p>
        </div>
    </div>
  )
}

export default postcard