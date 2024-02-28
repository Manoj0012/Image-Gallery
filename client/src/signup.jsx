import React, { useState } from 'react'
import Logo from './logo'




function signup() {
  const [name,setName]=useState("");
  const [password,setPassword]=useState("");
  const [cpassword,setCpassword]=useState("");
  // console.log(name,password,cpassword)
  const values={
    name:name,password:password,cpassword:cpassword
  }
  const err={
    errname:"",errpass:"",errcpass:""
  }
  function handlesubmit(values){
    var name=values.name;
    var pass=values.pass;
    var cpass=values.cpass;
    if(!name){
      return errname="Enter the name pls"
    }
    else{
      console.log("yes")
    }
  }
  return (
    <div className='min-w-[100vh] h-[100vh] flex'>
      <div className='w-[50%] h-[100%] flex  flex-col items-center'>
        <div className='w-[90%] h-[17vh] '><Logo /></div>
        <div className='w-[100%] h-[75vh]  flex items-center justify-center '>
          <div className='w-[400px] h-[600px]  flex flex-col items-center  justify-evenly bd-box '>
            <div className='bg-white w-[90%] h-[10%] text-start p-1 flex items-center justify-center font1'>Get Started Now</div>
            <div className='w-[90%] h-[60%]  flex flex-col items-center '>
              <label className='label'>Username</label>
              <input type="text" className='input-s bd'  onChange={(e)=>{setName(e.target.value)}}/>
              <div className='w-[80%] h-[20%]  text-center '></div>
              <label className='label '>Password</label>
              <input type="text" className='input-s bd' onChange={(e)=>{setPassword(e.target.value)}}/>
              <div className='w-[80%] h-[20%]  text-center '></div>
              <label className='label '>Confirm Password</label>
              <input type="text" className='input-s bd' onChange={(e)=>{setCpassword(e.target.value)}} />
              <div className='w-[80%] h-[20%]  text-center '></div>
            </div>
            <div className='bg-white w-[80%] h-[15%] flex flex-col  justify-center items-center pt-2'>
              <button className='w-[70%] h-[60%] bg-black text-white bd shadowb' onClick={handlesubmit}>signup</button>
              <div className="w[70%] h-[30%] pt-2 mb-2 text-login" >Already have an account?<a href='/login' className='text-black'> Login</a></div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-[50%] h-[100%] banner2 '></div>
    </div>
  )
}

export default signup