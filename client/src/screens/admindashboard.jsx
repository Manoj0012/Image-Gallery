import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Manageuser from '../components/manageuser';
import Postcard from '../components/postcard';
import Manageposts from '../components/manageposts';
import { api } from '../utils/api';
import Addadmin from './addadmin';
import { toast } from 'react-toastify';
import ReactModal from 'react-modal';
import Menubar from '../assets/image/menu.png'


function admindashboard() {
    const[menumodel,setMenumodel]=useState(false)
    const[profilemodel,setProfilemodel]=useState(false)
    const[image,setImage]=useState(null)
    const[profileimage,setProfileImage]=useState(null)
    console.log(profileimage)
    const [name,setName]=useState('')
    const controlbar=[{title:"My Post",state:"My Post"}, {title:"Manage user",state:"Manage User"}, {title:"Manage Post",state:"Manage Post"}, {title:"Add Admin",state:"Add Admin"}]
    const[state,SetState]=useState("My Post");
    const profiledata=[1,2,3,4,5]
    const[ismodel,setModel]=useState(false)
    console.log(state)
    const isMenuopen  = () => setMenumodel(true);
    const isMenuclose  = () => setMenumodel(false);
    const isprofileopen  = async() =>{ setProfilemodel(true)}
    const isprofileclose  = () => setProfilemodel(false);
    const handlelogout=()=>{
        localStorage.removeItem("token")
        nav("/")
    }
    const addprofile=()=>{
        if(profileimage==null){
            // console.log("error");
            toast.error("Image not selected?");
        }
        else{
        const pform = new FormData();
        pform.append("image",profileimage);
        pform.append("name",name)
        api.post("/user/addprofile",pform)
        .then((res)=>{
            const data=res.data
            toast.success("file uploaded")
            isClose()
        })
        .catch((err)=>{console.log(err)})}
    }
    useEffect(()=>{
        api.post('/user/check')
        .then((res)=>{
            const data=res.data
            if(data=='invalid'){
                toast.error("Unauthorized access")
                nav("/login")
            }
            else {
                
                if(data.role=="user"){
                 nav("/user")
                 toast.error("Only admin can access")
                }
                else{
                    var values=res.data
                console.log(values)
                setName(values.username)
                setImage(values.image.file_data)
                }
            }
        })
        .catch((err)=>{console.log(err)})

    })
   
  return (
    <div className='min-w-[100vh] min-h-[100vh] banner5 flex '>
       <div className='w-[25%] h-[100vh]  flex flex-col justify-evenly    banner5 Borderl'>
        <div className='w-[100%] h-[20%] '>
            <button className='h-[40px] w-[50px] menu' onClick={isMenuopen}><img className='w-[20px] h-[20px] ml-3' src={Menubar}></img></button>
            <div className='w-[100%] h-[70%] '></div>
            <div className='w-[100%] h-[20%] flex justify-center items-center'>
                <img className='w-[160px] h-[130px] bg-white shadowb bd-box' src={image}></img>
                <ReactModal isOpen={menumodel} ariaHideApp={false} style={{
        overlay: {
            backgroundColor: 'rgba(0,0,0,0.4)',
            zIndex: 9
        }, content: {
            background:'transparent',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            width: '170px',
            height: '250px',
            top: '12%',
            left: '10%',
            transform: 'translate(-50%, -50%)',
            border:'none'     
          }      
    }} >
        <div className='w-[170px] h-[150px] bg-white flex flex-col justify-evenly items-center bd'>
            <button className='w-[90%] h-[20%] mt-2 bd-box text-center menu green text-white' onClick={isprofileopen}>Add image</button>
            <button className='w-[90%] h-[20%] mb-2  bd-box text-center text-white menu red text-white' onClick={isMenuclose} >Cancel</button>
        </div>
    </ReactModal>
    <ReactModal isOpen={profilemodel} ariaHideApp={false} style={{
        overlay: {
            backgroundColor: 'rgba(0,0,0,0.4)',
            zIndex: 9
        }, content: {
            background:'transparent',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            width: '200px',
            height: '250px',
            top: '12%',
            left: '15%',
            transform: 'translate(-50%, -50%)',
            border:'none'     
          }      
    }} >
        <div className='w-[200px] h-[150px] bg-white flex flex-col justify-evenly items-center bd'>
            <input type="file" className='w-[100%] h-[20%] mt-2 bd-box text-center menu ' onChange={(e)=>{setProfileImage(e.target.files[0])}}/>
            <button className='w-[90%] h-[20%] mb-2 red bd-box text-center text-white menu green' onClick={addprofile}>add</button>
            <button className='w-[90%] h-[20%] mb-2  bd-box text-center menu red text-white' onClick={isprofileclose} >Cancel</button>
        </div>
    </ReactModal>
            </div>
        </div>
        <div className=' w-[100%] h-[65%] flex items-center justify-evenly'>
            <div className='w-[95%] h-[95%] flex flex-col  mt-9'>
                <div className='w-[100%] h-[20%] flex justify-center items-center'>
                    <p className='font1 text-center text-white'>Hi, {name}</p>
                </div>
                <div className='w-[100%] h-[40%] flex flex-col  justify-evenly items-center text-white'>
                   {controlbar.map((items,index)=>{return(<button className='w-[60%] h-[50%] bd-box Border mt-7' key={index} onClick={()=>SetState(items.state)}>{items.title}</button>)})}
                </div>
            </div>
        </div>
        <div className='w-[100%] h-[10%] flex justify-center items-center '>
            <button className='logout w-[60%] h-[50%] bg-black bd-box text-white red' onClick={handlelogout}>Logout</button>
        </div>
       </div>
       <div className='w-[75%] h-[100vh] bg-white'>
           <div className='w-[99%] h-[20%] flex justify-center items-end banner5 ml-1 bd-box'>
            <p className='text-white font1 mb-4'>{state}</p>
           </div>
           <div className='w-[100%] h-[80%]  flex  justify-center items-center bg-white   '>
           {state=="My Post"&&<div className='w-[99%] h-[99%]  bd-box grid grid-cols-2 gap-2 justify-items-center bg-white  over banner5 '>
           {profiledata.map((items,index)=>{
            return(<Postcard key={index}/>)
           })}
              </div>}
              {state=="Manage User"&&
           <Manageuser/>}
               {state=="Manage Post"&&
           <Manageposts/>}
              {state=="Add Admin"&&<div className='w-[99%] h-[99%]  bd-box flex justify-center items-center bg-white over banner5 '>
           <Addadmin/>
              </div>}
           </div>
       </div>
    </div>
  )
}

export default admindashboard