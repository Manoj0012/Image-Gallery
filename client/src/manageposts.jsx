import React from 'react'

function manageposts(data) {
  return (
    <div className='w-[400px] h-[350px] flex flex-col justify-evenly items-center bg-white m-4 bd-box '>
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
  )
}

export default manageposts