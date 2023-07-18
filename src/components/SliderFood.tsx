"use client"
import { BsSearch } from 'react-icons/bs';
import { useSession, signIn, signOut } from "next-auth/react"
import Image from 'next/image'
import React,{useState} from 'react'

interface IAFood{
    Name: string;
      Category:string,
      Type:string,
      Price:number,
      Rating:number,
      Image:string
    }
const SliderFood = () => {
    const [filterData, setFilterData] = useState<any >('')
    console.log(filterData);
    const [data, setData] = useState<IAFood[]>(
        [
        {
        
          "Name":"Chicken",
          "Category":"Non-Veg",
          "Type":"North-Indian",
          "Price":100,
          "Rating":5,
          "Image":"https://static.onecms.io/wp-content/uploads/sites/43/2022/05/26/8805-CrispyFriedChicken-mfs-3x2-072.jpg"
        },
       {
          "Name": "Aloo Sabji",
          "Category":"Veg",
          "Type":"North-Indian",
          "Price":800,
          "Rating":4,
          "Image":"https://www.shellyfoodspot.com/wp-content/uploads/2020/08/punjabi-dry-aloo-sabzidry-potato-sabzi-recipe-without-onion-and-garlic-scaled.jpg"
        },
     {
          "Name" :    "Dosa",
          "Category":"Veg",
          "Type":"South-Indian",
          "Price":900,
          "Rating":1,
      "Image":"https://cdn.tasteatlas.com/Images/Dishes/ba7bab747c7e41769dbc895a84626a23.jpg?m=facebook"
        },
        {
          "Name" : "Momos",
          "Category":"Non-Veg",
          "Type":"Chineese",
          "Price":400,
          "Rating":3,
          "Image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuK2D_TrfbJ2bfbto2wUZD4jk8pQ8xz7wWFQ&usqp=CAU"
        } ,
        {
          "Name" : "Burger",
          "Category":"Non-Veg",
          "Type":"Chineese",
          "Price":400,
          "Rating":3,
          "Image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2XfXIQWf_fiiJdcnMfKkuJ9-h5M_PRyRmRQ&usqp=CAU"
        },
        {
          "Name" : "Pizza",
          "Category":"Veg",
          "Type":"Chicken",
          "Price":800,
          "Rating":5,
          "Image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv_1lKQJtaslztmt0zUxvYgCKvmKm7wExJ1A&usqp=CAUs"
        } ,
        {
          "Name" : "Idli",
          "Category":"Veg",
          "Type":"South Indian",
          "Price":200,
          "Rating":2,
          "Image":"https://m.economictimes.com/thumb/msid-99118050,width-1200,height-900,resizemode-4,imgsize-64776/idli_istock.jpg"
        }  ,
        {
          "Name" : "Noodles",
          "Category":"Veg",
          "Type":"Chineese",
          "Price":800,
          "Rating":5,
          "Image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYJ9-AGN_-YvRkms0RjTdJVFGdDfp_WcfUOA&usqp=CAU"
        } 
        ,
        {
          "Name" : "Vada Pav",
          "Category":"Veg",
          "Type":"North Indian",
          "Price":800,
          "Rating":3,
          "Image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN5ka0VHJ4kCi8gBEn4iEgfqBgYfzZAjAXDQ&usqp=CAU"
        } ,
        {
          "Name" : "Fish",
          "Category":"Non-Veg",
          "Type":"South-Indian",
          "Price":500,
          "Rating":5,
          "Image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk1Nco_osktZvaHsiSXU6DCOTdky5nUgCfgw&usqp=CAU"
        } ,
        ]
      )

      // const [visibleResult, setVisibleResult] = useState<any>(data.slice(0,ITEM_PER_PAGE)) 

      // console.log(visibleResult);
      // const pagination = usePagination({
      //   total:Math.ceil(data.length / ITEM_PER_PAGE),
      //   initialPage:1,
      //  onChange(page){
      //   const start =(page-1) * ITEM_PER_PAGE
      //   const end =start + ITEM_PER_PAGE  
      //   setVisibleResult(data.slice(start,end))
      //  }
      // })
      const {data: session} = useSession()
  return (
    <>
    
     {/* navbar  */}

     <div className='flex items-center justify-evenly border border-gray-200 p-4 ' >
        <div className='flex space-x-7 items-center'>
            <p className='text-2xl font bold'>ZOMATO</p>
            <div className='flex items-center space-x-2 border border-gray-200 rounded-xl p-2'>
            <BsSearch/>
            <input type="text"  value={filterData} onChange={(e)=>setFilterData(e.target.value.toLowerCase())}  className='outline-none ' placeholder='Search For Food Name' />
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




    {/* Navbar end  */}
   
   
   
               <div className='flex flex-wrap space-x-5 space-y-3 p-2' >
                  
                  {data?.filter((item)=>{
      return filterData?.toLowerCase()==='' ? item.Name : item.Name.toLowerCase().includes(filterData);
     }) .map((datas)=>(
      <>
      <div className='flex flex-col border hover:shadow-xl  rounded-xl p-3 '>
        <div className='space-x-3'>
          <br />
      <span> Name:-{datas.Name}</span>
      <br />
      <span>Category:-{datas.Category}</span>
      <br />
      <span>
        <Image src={`${datas.Image}`} alt='nothing' className='rounded-xl' width={200} height={200}/>
        </span>
      <br />
      <span>Price:-{datas.Price}</span>
      <br />
      <span>Rating:-{datas.Rating}</span>
      <br />
      <span>Type:-{datas.Type}</span>
        </div>

      </div>
      </>

   )  )}

            </div>
    </>
  )
}

export default SliderFood