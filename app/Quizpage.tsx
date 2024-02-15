import React, { useState } from 'react'
import Footer from './footer';

export default function Quizpage() {
 const [count,setCount]=useState(2);
 const [datalist, setData] = useState("");

 const value = () => {
   return (
    <div className='m-auto w-[60%] mt-10 mb-10'>
    <div className='border-2 border-[#f5f0f0] bg-white p-5 space-y-2 rounded'>
    <div>
        <div className='flex  justify-around'>
            <div className='w-screen  '>
            <label htmlFor="" className='text-xl'>{count}.
        <input type="text" className='mx-3 w-1/2 px-1 mt-3 text-sm md:text-3xl   border-b-2 outline-none border-black' placeholder='Untitled Question'/>
        </label>
            </div>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 mt-2 cursor-pointer hover:text-red-600">
  <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

            </div>
        </div>
        <div>
            <div>
            <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
       <input type="text" className='w-[80%] md:w-[90%] mx-3 px-1 mt-3 text-xl border-b-2 outline-none border-[#ebebeb] focus:border-black ' placeholder='Option 1'/>
            </div>
            <div>
            <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
              <input type="text" className='w-[80%] md:w-[90%] mx-3 px-1 mt-3 text-xl border-b-2 outline-none border-[#ebebeb] focus:border-black' placeholder='Option 2'/>
            </div>
            <div>
            <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
             <input type="text" className='w-[80%] md:w-[90%] mx-3 px-1 mt-3 text-xl border-b-2 outline-none border-[#ebebeb] focus:border-black' placeholder='Option 3'/>
            </div>
            <div>
            <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
         <input type="text" className='w-[80%] md:w-[90%] mx-3 px-1 mt-3 text-xl border-b-2 outline-none border-[#ebebeb] focus:border-black' placeholder='Option 4'/>
            </div>
            
        </div>
    </div>
           
       </div> 
    </div>
   ); // Ensure value function returns JSX
 };

 const datacaller = () => {
   setData(prevDataList => [...prevDataList, value()]);
   setCount(count+1); // Add the new value to the datalist
 };
    return (
    <div >
    <div className='shadow-xl p-6 flex justify-between border-b-2 border-[#dbd9d9]'>
    <div> 
    </div>
    <div>
    <ul className='flex p-2 text-md ms-7 mt-1  gap-x-11'>
    <li><a href="#" className="relative text-md w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
Questions
</a>
</li>
<li><a href="#" className="relative text-md w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
Responses
</a>
</li>
    </ul>
    </div>
    <div >
    <button type="button" className="text-white bg-gray-800 mt-1 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-8 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Send</button>
    </div>
     </div>
     <div className='bg-[#F0EBF8] min-h-screen  p-1'>
    <div className='m-auto w-[60%] mt-5 '>
        <div className='border-2 border-[#f5f0f0] bg-white p-5 space-y-2 rounded'>
            <div>
                <input type="text" className='mx-3 px-1 mt-3 text-md md:text-3xl lg:text-5xl border-b-2 outline-none border-black' placeholder='Untitled Form'/>
            </div>
            <div>
                <input type="text" className='w-1/3 px-1 mx-3 border-b-2 outline-none border-black' placeholder='Form description'/>  
            </div>
        </div>
    </div>
    <div className='m-auto w-[60%] mt-5'>
    <div className='border-2 border-[#f5f0f0] bg-white p-5 space-y-2 rounded'>
    <div>
        <div className='flex  justify-between'>
            <div className='w-screen'>
            <label htmlFor="" className='text-xl'>1.
        <input type="text" className='mx-3 w-1/2 px-1 mt-3 text-sm md:text-3xl   border-b-2 outline-none border-black' placeholder='Untitled Question'/>
        </label>
            </div>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 mt-2 cursor-pointer hover:text-red-600">
  <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

            </div>
        </div>
        <div>
            <div>
            <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
       <input type="text" className='w-[80%] md:w-[90%] mx-3 px-1 mt-3 text-xl border-b-2 outline-none border-[#ebebeb] focus:border-black ' placeholder='Option 1'/>
            </div>
            <div>
            <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
              <input type="text" className='w-[80%] md:w-[90%] mx-3 px-1 mt-3 text-xl border-b-2 outline-none border-[#ebebeb] focus:border-black' placeholder='Option 2'/>
            </div>
            <div>
            <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
             <input type="text" className='w-[80%] md:w-[90%] mx-3 px-1 mt-3 text-xl border-b-2 outline-none border-[#ebebeb] focus:border-black' placeholder='Option 3'/>
            </div>
            <div>
            <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
         <input type="text" className='w-[80%] md:w-[90%] mx-3 px-1 mt-3 text-xl border-b-2 outline-none border-[#ebebeb] focus:border-black' placeholder='Option 4'/>
            </div>
            
        </div>
    </div>
           
       </div> 
    </div>
    <div className=' mt-2'>
    {datalist}
    <div className='text-center'>
    <button type="button" onClick={datacaller}  className=" text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-6 py-2 me-2 mb-10 mt-4 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Add Question</button>
      
    </div>
       <Footer/>
        </div>
</div>

    </div>
  )
}