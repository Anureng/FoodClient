"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import SliderFood from '@/components/SliderFood'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import React from 'react'

const page = () => {


  
  
  return (
    <div>
        <SliderFood/>
        <Footer/>
    </div>
  )
}

export default page