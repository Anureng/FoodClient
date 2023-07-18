import { useSession } from 'next-auth/react';
import Image from 'next/image'
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react'
import { AiFillCaretRight } from 'react-icons/ai';


const Feature = () => {


  // const ForawardThreeTab = () =>{
  //   if(session){
  //     alert ("login successful")
  //   }else{
  //     alert ("login failed")
  //   }
  // }


  return (
    <div>
      <main>
        <div className=' sm:flex-row flex space-y-5 sm:space-y-0 flex-col items-center justify-center sm:space-x-10 p-10'>
          <Link href="/ThreeTab">
          <div className=' border w-fit shadow-md ' >
            <Image src="/foodFeature.jpg" alt='foodFeature' height={100} width={310} className=' h-44 rounded-t-lg' loading="lazy" />
            <h1 className='px-2 py-1 font-semibold text-lg'>Order Online</h1>
            <p className='px-2 py-1'>Stay home and order to your doorstep</p>
          </div>
          </Link>
          <Link href="/Feature">
          <div className=' border w-fit shadow-md '>
          <Image src="/restaurentFood.jpg" alt='foodFeature' height={100} width={310} className=' h-44 rounded-t-lg' loading="lazy" />
            <h1 className='px-2 py-1 font-semibold text-lg'>Order Online</h1>
            <p className='px-2 py-1'>Stay home and order to your doorstep</p>
          </div>
          </Link>
          <div className=' border w-fit shadow-md '>
          <Image src="/NightFeature.jpg" alt='foodFeature' height={100} width={310} className=' h-44 rounded-t-lg' loading="lazy" />
            <h1 className='px-2 py-1 font-semibold text-lg'>Order Online</h1>
            <p className='px-2 py-1'>Stay home and order to your doorstep</p>
          </div>
        </div>

        <div className=' text-white flex flex-col p-10 space-y-8 '>
          <div className='text-black flex flex-col items-center'>
            <p className='font-medium  text-4xl'>Collections</p>
            <p  className='text-xl font-light'>Explore curated lists of top restaurants, cafes, pubs, and bars in Mumbai, based on trends</p>
          </div>
          <div className=' flex sm:flex-row flex-col space-y-4 sm:space-y-0  sm:space-x-10 items-center justify-center'>
          <div className='relative  flex justify-center items-center w-fit   '>
         <Image src="/cake.jpg" alt='header' className='rounded-xl ' width={200} height={200}/>
          <p className='absolute  -translate-x-1 -translate-y-1/4 bottom-1 left-1 py-1 px-4'> 
          Insider Guide
          <h1 className='flex items-center space-x-2'>15 places <AiFillCaretRight/> </h1>
          </p>
          </div>
          <div className='relative flex justify-center items-center w-fit'>
         <Image src="/cake.jpg" alt='header' className='rounded-xl ' width={200} height={200}/>
          <p className='absolute   -translate-x-1 -translate-y-1/4 bottom-1 left-1 py-1 px-4'> 
          6 Unique Dining 
          <h1 className='flex items-center space-x-2'>6 places <AiFillCaretRight/></h1>
          </p>
          </div>
          <div className='relative flex justify-center items-center w-fit'>
         <Image src="/cake.jpg" alt='header'  className='rounded-xl '  width={200} height={200}/>
          <p className='absolute   -translate-x-1 -translate-y-1/4 bottom-1 left-1 py-1 px-4'> 
          13 sea view
          <h1 className='flex items-center space-x-2'>13 places <AiFillCaretRight/></h1>
          </p>
          </div>
          <div className='relative flex justify-center items-center w-fit'>
         <Image src="/cake.jpg" alt='header' className='rounded-xl ' width={200} height={200}/>
          <p className='absolute   -translate-x-1 -translate-y-1/4 bottom-1 left-1 py-1 px-4'> 
          13 sea view
          <h1 className='flex items-center space-x-2'>13 places <AiFillCaretRight/></h1>
          </p>
          </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Feature