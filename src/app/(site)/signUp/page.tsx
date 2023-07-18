// 'use client'
// import React from 'react'
// import { useSession, signIn, signOut } from "next-auth/react"
// import { redirect } from 'next/navigation'

// const page = () => {
//   // const { data: session } = useSession({
//   //   required:true,
//   //   onUnauthenticated(){
//   //     redirect('/login')
//   //   }
//   // })
 
//   const {data: session} = useSession()
//   return (
//     <div>
//       {
//         session?.user ?(
//           <>
//           <p>{session.user.name}</p>
//           </>
//         ):(
//           <button onClick={()=>signIn('google')}>Sign In</button>
//           )
//         }
  
//         <button onClick={()=>signOut()}>SignOut</button>
//     </div>
//   )
// }

// export default page