'use client'
import React from 'react'
import { BsSearch } from 'react-icons/bs';
import { useSession, signIn, signOut } from "next-auth/react"
import Image from 'next/image';




const Navbar = () => {
  const {data: session} = useSession()
  return (
    <div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0  items-center justify-evenly border border-gray-200 p-4 ' >
        <div className=' flex lg:space-x-7 items-center'>
            <p className='lg:text-2xl text-sm font bold'>ZOMATO</p>
            <div className='flex items-center space-x-2 border border-gray-200 rounded-xl p-2'>
            <BsSearch/>
            <input type="text" className='outline-none ' placeholder='Search For Food ' />
            </div>
        </div>
        <div className='flex space-x-5 text-lg'>
        {
        session?.user ?(
          <>
          <p>{session.user.name}</p>
          <Image className='rounded-lg' src={`${session.user.image}`} alt="User" width={30} height={20} />
          </>
        ):(
          <button onClick={()=>signIn('google')}>Sign In</button>
          )
        }
             <button onClick={()=>signOut()}>SignOut</button>
        </div>
    </div>
  )
}

export default Navbar