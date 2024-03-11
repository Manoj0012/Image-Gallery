import React from 'react'

function manageuser(items) {
  return (
    <div className='w-[250px] h-[300px] flex flex-col  bg-white mt-4 bd-box banner3 '>
     <div className='w-[100%] h-[40%] flex justify-center '>
        <img className='w-[50%] h-[100%] mt-2 shadowb'/>
     </div>
     <div className='w-[100%] h-[30%] flex  justify-evenly items-center text-black  flex-col mt-4 bg-white'>
     <p className='w-[70%] h-[25%] start mt-6'>Id: {items.id}</p>
     <p className='w-[70%] h-[25%] start'>Name:{items.name}</p>
     <p className='w-[70%] h-[25%] start'>Type:{items.type}</p>
     </div>
     <div className='w-[100%] h-[30%] flex  justify-center items-end bg-white'>
      <div  className='w-[45%] h-[30%]  text-center text-black mb-4  bd-box mr-2'>Edit</div>
      <div className='w-[45%] h-[30%] text-center mb-4 text-white bd-box red'>Delete</div>
     </div>
    </div>
  )
}

export default manageuser