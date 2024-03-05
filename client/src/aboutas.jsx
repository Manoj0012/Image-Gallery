import React from 'react';
import Nav from './nav';
import {NavLink} from 'react-router-dom';
export default function about(){
    return(
        <div className='min-w-[100vh] min-h-[100vh] '>
           <div>
            <Nav/>
           </div>
           <div>
            About a
           </div>
        </div>
    )
}