import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Home() {
    const [pass , setPass] = useState("")
    const nav = useNavigate()
    function acceptPass() {
        if(pass != "BestFriendForEver"){
            window.alert("Check Your Pass My Love ♥️")
            
        }else{
            nav("/memories")
            
        }
    }
    
  return (
    <div className="groupt h-screen bg-[#CF8161] py-24  ">
        <div className="container">
            <div className="flex flex-col   items-center justify-center  border py-16 border-black rounded-xl ">
                
                <div className="text bg-white py-2 px-2 rounded-full">
                    <h1 className='text-2xl'> ♥️</h1>
               
            </div>
            <h1 className='pt-5 text-4xl font-semibold px-20 text-center'>Continue Our Journey</h1>
            <p className='text-black/60 pt-3'>A PRIVATE SPACE FOR OUR MEMORIES</p>
            <input
            onChange={(e)=>{
                setPass(e.target.value)
            }}
           
            type="password" className='mt-4 py-2 px-7 rounded-xl placeholder:text-center ' placeholder='Enter Password' />
            <Link
             onClick={()=>{
                acceptPass()
            }}
             to={""} className='mt-4 bg-[#D9A5A9] px-24 py-3 text-white rounded-xl'>Open Our World</Link>
            </div>
        </div>
    </div>
  )
}
