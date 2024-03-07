import React, { useState } from 'react'
import Postcard from './postcard'
function userdashboard() {
    const [name,SetName]=useState("Sarah")
    return (
        <div className='min-w-[100vh] min-h-[100vh] '>
            <div className='w-[100%] h-[20vh] bg-white banner6 shadowb'>
                <div className='w-[100%] h-[90%]  flex justify-start items-end'>
                    <div className='w-[30%] h-[50%]  text-white flex  justify-center  items-center '><p className='p-2 ml-4 mr-2 font1'>Hi, <span className='font1'>{name}</span></p></div>
                </div>
                <div className='w-[100%] h-[10%] flex items-center justify-center'>
                    <div className='w-[200px] h-[150px] bg-white bd-box mb-9 '>
                        <img className='w-[100%] h-[100%]' src=''></img>
                    </div>
                    </div>
                    <div className='w-[100%] h-[80vh] flex justify-center items-center '>
                     <div className='w-[95%] h-[90%] mt-9 bd-box  banner4 bg-white grid grid-cols-2 justify-items-center over Scroll'>
                        <Postcard/>
                        <Postcard/>
                        <Postcard/>
                        <Postcard/>
                     </div>
                    </div>
            </div>
        </div>
    )
}

export default userdashboard