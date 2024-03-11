import React from 'react'

function manageuser(items) {
  return (
    <div className='w-[250px] h-[300px] flex flex-col  bg-white mt-4 bd-box banner4 '>
     <div className='w-[100%] h-[40%] flex justify-center '>
        <img className='w-[50%] h-[100%] mt-2 shadowb'/>
     </div>
     <div className='w-[100%] h-[30%] flex  justify-evenly items-center text-black  flex-col mt-4 bg-white'>
     <p className='w-[70%] h-[20%] start'>Id: {items.id}</p>
     <p className='w-[70%] h-[20%] start'>Name:{items.name}</p>
     <p className='w-[70%] h-[20%] start'>Type:{items.type}</p>
     </div>
     <div className='w-[100%] h-[50%] flex  justify-center items-end bg-white'>
      <div  className='w-[45%] h-[25%] bg-black text-center mb-4 bg-black bd-box'>Delete</div>
      <div className='w-[45%] h-[25%] text-center mb-4 bg-box'>Delete</div>
     </div>
    </div>
  )
}

export default manageuser