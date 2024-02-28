import React from 'react'
import Logo from './logo'

function login() {
    return (
        <div className='min-w-[100vh] h-[100vh] flex'>
            <div className='w-[50%] h-[100%] flex  flex-col items-center'>
                <div className='w-[100%] h-[17vh]'><Logo /></div>
                <div className='w-[100%] h-[75vh]  flex items-center justify-center '>
                    <div className='w-[400px] h-[550px]  flex flex-col items-center  justify-evenly bd-box '>
                        <div className='bg-white w-[90%] h-[10%]  p-1 flex items-center justify-center font1 '>Welcome Back</div>
                        <div className='w-[90%] h-[40%]  flex flex-col items-center '>
                            <label className='label'>Email</label>
                            <input type="text" className='input-s bd' />
                            <div className='w-[90%] h-[20%] bg-white text-center'></div>
                            <label className='label '>Password</label>
                            <input type="text" className='input-s bd' />
                            <div className='w-[90%] h-[20%] bg-white text-center'></div>
                            </div>
                            <div className='bg-white w-[80%] h-[15%] flex flex-col  justify-center items-center pt-2'>
                            <button className='w-[70%] h-[60%] bg-black text-white bd shadowb'>Login</button>
                            <div className="w[70%] h-[30%] pt-2 text-login" >Don't have an account?<a href='/signup' className='text-black'> Signup</a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[50%] h-[100%] banner2 '></div>
        </div>
    )
}

export default login