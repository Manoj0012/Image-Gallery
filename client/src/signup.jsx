import React from 'react'
import Logo from './logo'

function signup() {
  return (
    <div className='min-w-[100vh] h-[100vh] flex'>
      <div className='w-[50%] h-[100%] flex  flex-col items-center'>
        <div className='w-[90%] h-[17vh] '><Logo/></div>
        <div className='w-[100%] h-[75vh]  flex items-center justify-center '>
         <div className='w-[400px] h-[500px]  flex flex-col items-center justify-evenly bd-box '>
         <div className='bg-white w-[90%] h-[15%] text-start p-1 flex items-center font1'>Get Started Now</div>
         <input type="text" className='bg-white w-[70%] h-[10%] bd shadowb'/>
           <input type="text" className='bg-white w-[70%] h-[10%] bd shadowb'/>
           <input type="text" className='bg-white w-[70%] h-[10%] bd shadowb'/>
           <div className='bg-white w-[80%] h-[15%] flex justify-evenly pt-2'>
            <button className='w-[45%] h-[70%] bg-black bd text-white shadowb'>Login</button>
            <button className='w-[45%] h-[70%] bd shadowb'>signup</button>
         </div>
        </div>
      </div>
      </div>
      <div className='w-[50%] h-[100%] banner2 '></div>
    </div>
  )
}

export default signup