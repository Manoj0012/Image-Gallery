import React from 'react'

function admindashboard() {
  return (
    <div className='min-w-[100vh] min-h-[100vh] banner5 flex '>
       <div className='w-[35%] h-[100vh] bg-white flex flex-col justify-evenly shadowb'>
        <div className='w-[100%] h-[20%] bg-black'>
            <div className='w-[100%] h-[80%] bg-white'></div>
            <div className='w-[100%] h-[20%] flex justify-center items-center'>
                <img className='w-[150px] h-[120px] bg-black shadowb'></img>
            </div>
        </div>
        <div className=' w-[100%] h-[65%] flex items-center justify-evenly'>
            <div className='w-[95%] h-[95%] flex flex-col bg-black mt-9'>
                <div className='w-[100%] h-[20%] flex justify-center items-center'>
                    <p className='font1 text-center text-white'>Hi, admin</p>
                </div>
                <div className='w-[100%] h-[80%] flex flex-col bg-white justify-start items-center'>
                    <div className='w-[100%] h-[10%] mt-9 flex justify-center items-center'>aaaaaa</div>
                     <div className='w-[100%] h-[10%] flex justify-center items-center'>aaaaaaaa</div>
                   <div className='w-[100%] h-[10%] flex justify-center items-center'>aaaaaaa</div>
                </div>
            </div>
        </div>
        <div className='w-[100%] h-[10%] flex justify-center items-center'>
            <button className='w-[75%] h-[50%] bg-black bd-box text-white'>Logout</button>
        </div>
       </div>
       <div className='w-[65%] h-[100vh] '></div>
    </div>
  )
}

export default admindashboard