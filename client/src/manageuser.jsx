import React from 'react'

function manageuser(items) {
  return (
    <div className='w-[250px] h-[300px] flex flex-col  bg-black mt-4 bd-box '>
     <div className='w-[100%] h-[40%] flex justify-center'>
        <img className='w-[50%] h-[100%] mt-2'/>
     </div>
     <div className='w-[100%] h-[30%] flex mt-4 ml-2 text-white flex flex-col'>
     <p className='ml-2'>Id:aaaaaaaaaaa {items.id}</p>
     <p className='ml-2 mt-3'>Name:aaaaaaaaaaa {items.name}</p>
     <p className='ml-2 mt-3'>Type:aaaaaaaaaaa {items.type}</p>
     <div></div>
     </div>
    </div>
  )
}

export default manageuser