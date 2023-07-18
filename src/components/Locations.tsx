import React from 'react'
import { AiFillCaretRight } from 'react-icons/ai';
const Locations = () => {
  return (
    
      <main className='border border-black'>
        <div>
        Popular localities in and around Mumbai
        </div>
        <div className='flex flex-col lg:flex-row border border-black'>
          {/* 1 */}
          <div className='border border-black lg:w-60 flex items-center justify-between p-2 '>
            <div>
          <div>Lower Parel</div>
          <div>412 Places</div>
            </div>
            <div>
              <AiFillCaretRight/>
            </div>
          </div>
          {/* 2 */}
          <div className='border border-black lg:w-60 flex items-center justify-between p-2 '>
            <div>
          <div>Lower Parel</div>
          <div>412 Places</div>
            </div>
            <div>
              <AiFillCaretRight/>
            </div>
          </div>
          {/* 3 */}
          <div className='border border-black w-60 flex items-center justify-between p-2  '>
            <div>
          <div>Lower Parel</div>
          <div>412 Places</div>
            </div>
            <div>
              <AiFillCaretRight/>
            </div>
          </div>
          <br />
          {/* 4 */}
          <br />
          <div>

          <div className='border border-black w-60 flex items-center justify-between p-2  '>
            <div>
          <div>Lower Parel</div>
          <div>412 Places</div>
            </div>
            <div>
              <AiFillCaretRight/>
            </div>
          </div>
          {/* 5 */}
          <div className='border border-black w-60 flex items-center justify-between p-2  '>
            <div>
          <div>Lower Parel</div>
          <div>412 Places</div>
            </div>
            <div>
              <AiFillCaretRight/>
            </div>
          </div>
          {/* 6 */}
          <div className='border border-black w-60 flex items-center justify-between p-2  '>
            <div>
          <div>Lower Parel</div>
          <div>412 Places</div>
            </div>
            <div>
              <AiFillCaretRight/>
            </div>
          </div>
          </div>
        </div>
      </main>
    
  )
}

export default Locations