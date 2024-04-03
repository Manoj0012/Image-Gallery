import React, { useEffect, useState } from 'react'
import Postcard from '../components/postcard'
import Addpost from '../components/addpost'
import Goback from '../assets/image/arrorback.png'
import Menubar from '../assets/image/menu.png'
import ReactModal from 'react-modal';
import { api } from '../utils/api';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
function userdashboard() {
    const nav =useNavigate()
    const [name,setName]=useState("")
    const data=[{title:"image"},{title:"image1"},{title:"image2"},{title:"image3"},{title:"image4"},{title:"image5"},{title:"image5"}]
    const[ismodel,setModel]=useState(false)
    const[menumodel,setMenumodel]=useState(false)
    const handlelogout=()=>{
        localStorage.removeItem("token")
         nav("/")
    }
    // console.log(menumodel)
    const isOpen  = () => setModel(true);
    const isClose  = () => setModel(false);
    const isMenuopen  = () => setMenumodel(true);
    const isMenuclose  = () => setMenumodel(false);
    
    useEffect(()=>{
        api.post('/user/check')
        .then((res)=>{
            const data=res.data
            // console.log(res.data)
            if(data=='invalid'){
                toast.error("Unauthorized access")
                nav("/login")
            }
            else {
                if(data.role=="user"){
                var values=res.data
                setName(values.username)}
                else{
                    toast.error("Only users")
                    nav("/")}
                
            }
        })
        .catch((err)=>{console.log(err)})

    },[])
    return (
        <div className='min-w-[100vh] min-h-[100vh] '>
            <div className='w-[100%] h-[20vh] bg-white banner6 shadowb '>
                <div className='w-[100%] h-[90%]  flex flex-col justify-start items-evenly'>
                    <div className='w-[100%] h-[50%] flex justify-evenly'>
                    <a className='w-[30%] h-[100%]' href='/login'><img className='w-[30px] h-[30px] m-4' src={Goback}/></a>
                    <div className='w-[70%] h-[100%] flex justify-end'>
                        <button className='w-[30px] h-[30px] m-4 menu' onClick={isMenuopen}><img src={Menubar} className='menu'/></button>
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
            left: '90%',
            transform: 'translate(-50%, -50%)',
            border:'none'     
          }      
    }} >
        <div className='w-[170px] h-[150px] bg-white flex flex-col justify-evenly items-center bd'>
            <button className='w-[90%] h-[20%] mt-2 bd-box text-center menu green'>Add image</button>
            <button className='w-[90%] h-[20%] mb-2 red bd-box text-center text-white menu' onClick={handlelogout}>Logout</button>
            <button className='w-[90%] h-[20%] mb-2  bd-box text-center text-white menu ' onClick={isMenuclose} >Cancel</button>
        </div>
    </ReactModal>
                    </div>
                    </div>
                    <div className='w-[30%] h-[50%]  text-white flex  justify-center  items-center '><p className='p-2 ml-4 mr-2 font1'>Hi, <span className='font1'>{name}</span></p></div>
                </div>
            
                <div className='w-[100%] h-[10%] flex items-center justify-center'>
                    
                    <div className='w-[200px] h-[150px] bg-white bd-box mb-14  flex'>       
                            <img src='' className='w-[100%] h-[100%] bg-white bd-box'/>
                    </div>
                    </div>
                    <div className='w-[100%] h-[80vh] flex justify-center items-center '>
                     <div className='w-[98%] h-[90%] mt-9 bd-box  banner5 bg-white flex-cols'>
                       <div className='w-[100%] h-[97%] grid grid-cols-3 justify-items-center over Scroll'>
                         {data.map((items,index)=>{
                        return(<Postcard key={index} />)
                        })}
         <ReactModal isOpen={ismodel} ariaHideApp={false} style={{
        overlay: {
            backgroundColor: 'rgba(0,0,0,0.4)',
            zIndex: 9
        }, content: {
            background:'transparent',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            width: '400px',
            height: '500px',
            top: '65%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            border:'none'
          }
       
    }} >
        
        <div className='w-[400px] h-[500px] bg-white bd-box flex flex-col justify-evenly '>
        <div className='w-[100%] h-[10%]  font1 flexb'>Add Post</div>
        <div className='w-[100%] h-[40%] flexb '>
            <input className='w-[90%] h-[95%] bd' type='image'/>
        </div>
        <div className='w-[100%] h-[20%]  flexb flex-c'>
            <label className='label mb-4 '>Caption</label>
            <input className='w-[90%] h-[40%] bd-box' type='text'/>
        </div>
        <div className='w-[100%] h-[20%] flex justify-evenly items-center'>
            <button className='w-[30%] h-[40%] green bd-box text-white'>Add</button>
            <button className='w-[30%]  h-[40%]  bd-box red text-white ' onClick={isClose}>Cancel</button>
        </div>
    </div>
    </ReactModal>
                        </div>
                        <div className='w-[100%] h-[3%] flex justify-center items-center '>
                            <div className='w-[70px] h-[40px] bg-white bd-box Add flex justify-center items-center text-white' onClick={isOpen}>Add</div>
                        </div>
                     </div>
                    </div>
            </div>
        </div>
    )
}

export default userdashboard