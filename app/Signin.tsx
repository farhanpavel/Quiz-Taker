import React from 'react'
import Header from "../app/header.tsx"
import Footer from "../app/footer.tsx"
export default function Signin() {
  return (
    <div>
      <Header/>
      <div className='shadow-lg flex  justify-between w-[80%] gap-x-16 items-center m-auto mt-10 p-5 mb-16'>
        <div >
          <div className='flex flex-wrap items-center gap-x-2 place-content-center mb-5'>
          <img className='w-20' src="./images/Signin/Q.png" alt="" />
          <h1 className='text-4xl  bg-gradient-to-r from-blue-500 to-blue-300 text-transparent bg-clip-text font-medium'>Quizzy</h1>
          </div>
          <div>
            <div className='mb-4'>
            <h1 className='text-[#767474] text-center'>Welcome  back!</h1>
            <p className='text-[rgb(117,114,114)] text-center'>Please login/Signup to your account.</p>
           
            </div>
             <div className='space-y-2'>
             <input className=" placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Email Address" type="text" name="search"/>
             <input className=" placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Password" type="text" name="search"/>
             </div> 
             <div className='flex flex-wrap justify-between gap-x-8 mt-2'>
              <div >
              <input type="checkbox" />
              <label htmlFor="checkbox" className='ms-1 text-sm'>Remember me</label>
              </div>
              <div>
            <a href="" className='text-sm'>Forgot Password?</a>
              </div>
             </div>
             <div className='mt-5 space-x-5 m-auto flex  items-center place-content-center'>
              <button className='text-white text-md bg-gradient-to-r from-blue-500 to-blue-300 lg:px-4 lg:py-2 py-1 px-3 rounded-full'><a href="" className='p-2'>Login</a> </button>
              <button className='text-white text-md bg-gradient-to-r from-blue-500 to-blue-300 lg:px-4 lg:py-2 py-1 px-3 rounded-full'><a href="" className='p-2'>Signup</a></button>
             </div>
          </div>
        </div>
        <div  className='w-1/2'>
      <img src="./images/Signin/Signin.jpg" alt="" />
        </div>
      </div>
      <Footer/>
    </div>
  )
}
