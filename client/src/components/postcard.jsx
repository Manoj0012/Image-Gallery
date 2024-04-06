import React, { useState } from 'react'

function postcard(data) {
  return (
    <div className='w-[300px] h-[250px]  flex flex-col justify-evenly items-center bg-white m-4 bd-box '>
        <img  src={data.src}  className='w-[95%] h-[75%]'></img>
        <div className='w-[95%] h-[20%] flex justify-center items-center'>
          <p className='w-[100%] h-[50%] text-black text-center '>{data.caption}</p>
        </div>
    </div>
  )
}

export default postcard