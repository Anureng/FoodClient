import React,{useState} from 'react'


const Footer = () => {
  return (
    <div className='bg-gray-100 p-4'>
        <div className='flex  items-center justify-evenly space-x-6'>
            <p>Zomato</p>

            <div className='flex space-x-2'>
            <button className=''  >India</button>   
            <div> 
                </div>         
            <button>English</button>             
            </div>
        </div>
        <div className='flex flex-col sm:flex-row space-y-3 space-x-7 items-center justify-center'>

        <div className='flex space-x-4' >
        <div>
            <ul className='text-sm font-light space-y-2'>
                <li className="text-lg font-normal">ABOUT  ZOMATO</li>
                <li>Who We Are</li>
                <li>Blog</li>
                <li>Work With Us</li>
                <li>Investor Relations</li>
                <li>Report Fraud</li>
                <li>Contact Us</li>
            </ul>
        </div>
        <div>
            <ul className='text-sm font-light space-y-2'>
                <li className="text-lg font-normal">ZOMAVERSE</li>
                <li>Zomato</li>
                <li>Blinkit</li>
                <li>Feeding India</li>
                <li>Hyperpure</li>
                <li>Zomaland</li>
            </ul>
        </div>
        </div>

        <div className='flex space-x-4'>
        <div>
            <ul className='text-sm font-light space-y-2'>
                <li className="text-lg font-normal">FOR RESTAURANTS</li>
                <li>Partner With Us</li>
                <li>Apps For You</li>
                <li>FOR ENTERPRISES</li>
                <li>Zomato For Enterprise</li>
            </ul>
        </div>
        <div>
            <ul className='text-sm font-light space-y-2'>
                <li className="text-lg font-normal">Learn More</li>
                <li>Privacy</li>
                <li>Security</li>
                <li>Terms</li>
                <li>Sitemap</li>
            </ul>
        </div>
        </div>
        <div>
            <p>Social Links</p>
            <div>All Links</div>
            <p></p>
            <p>Download on the <br /> AppStore</p>
            <p>Get It On <br />
            GooglePlay
            </p>
        </div>
        </div>
        </div>
  )
}

export default Footer