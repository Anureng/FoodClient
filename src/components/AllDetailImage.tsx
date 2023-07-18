import Image from 'next/image'
import React from 'react'
import { BiSolidDirectionRight } from 'react-icons/bi';
import { PiShareFatThin } from 'react-icons/pi';
import { BsBookmarkPlus } from 'react-icons/bs';



const AllDetailImage = () => {
  return (
    <div className='flex flex-col '>
        <main className='flex space-x-4 items-center justify-center p-3'>
            <Image src="/header.jpg" height={700} width={700} alt='Nothing'/>
            <div className='space-y-4 flex flex-col items-end justify-center'>

            <Image src="/header.jpg" height={335} width={335} alt='Nothing'/>
            <Image src="/header.jpg" height={335} width={335} alt='Nothing'/>
            </div>
        </main>

        <div  className='flex  items-center justify-around p-3'>
        <div className='space-y-4'>
        <div className='space-y-1'>
        <p className='text-4xl'>Natural Ice Cream</p>
            <p className='font-light'>Ice Cream</p>
            <p className='font-light'>
                Kalyan , Thane
            </p>
        </div>
        <div className='space-y-4'>
            <p className='flex items-center space-x-3'>
                <p className='text-orange-400 font-light'>
                Open now
                </p>
                 - 12Midnight -1 
                 </p>
            <div className='flex space-x-4'>
                <button className='border border-gray-400 px-1 py-2 rounded-xl flex items-center gap-x-1'><BiSolidDirectionRight className='text-red-300 text-lg'/> Direction</button>
                <button className='border border-gray-400 px-1 py-2 rounded-xl flex items-center gap-x-1'><BsBookmarkPlus className='text-red-300 text-lg'/> Bookmark</button>
                <button className='border border-gray-400 px-1 py-2 rounded-xl flex items-center gap-x-1'><PiShareFatThin className='text-red-300 text-lg'/> Share</button>
            </div>
        </div>
        </div>
        <div>
            <p>
                <p>3.9</p>
                <p>4.5</p>
            </p>
        </div>
        </div>

    </div>
  )
}

export default AllDetailImage