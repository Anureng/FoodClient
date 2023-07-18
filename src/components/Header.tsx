import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'

const Header = () => {
  const styling = {
    backgroundImage: `url('/header.jpg')`,
    backgroundRepeat:"no-repeat" ,
    backgroundSize:  'cover',
    height:'100%'
}
const {data: session} = useSession()
  return (
    <div>
        <div style={styling}>
        <nav className='text-white  flex items-center justify-around font-normal p-4 text-lg'>
       
            <ul className='flex gap-3 '>
                <div className='flex space-x-4'>
      {
        session?.user ?(
          <>
          <p className='font-bold font-mono text-blue-300'>{session.user.name}</p>
          </>
        ):(
          <button onClick={()=>signIn('google')}>Sign In</button>
          )
        }
  
        <button onClick={()=>signOut()}>SignOut</button>
    </div>
            </ul>
        </nav>

        <div className='text-white text-5xl flex flex-col justify-center items-center p-32 space-y-10 font-serif font-extrabold'>
            <p>
                ZOMATO
            </p>
            <p className='text-4xl font-semibold'>
            Discover the best food & drinks in Mumbai
            </p>
        </div>
        </div>
    </div>
  )
}

export default Header