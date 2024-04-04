import { useState } from "react";
import Header from "./header";
import Footer from "./footer";

export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    c_password: "",
    agreed: false,
  });

  const handleChange = (e: { target: { name: any; value: any; type: any; checked: any; }; }) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: val });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log(JSON.stringify(formData));
    try {

      const response = await fetch("http://localhost/backend/singup.php", {
        
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.text();
      console.log(data); // This could be the message from the PHP script
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Header />
      <div className='shadow-lg flex place-content-center sm:justify-between w-[80%] gap-x-16 items-center m-auto mt-10 p-5 mb-5'>
        <div>
          <div className='flex flex-wrap items-center gap-x-2 place-content-center mb-5'>
            <img className='w-20' src="./images/Signin/Q.png" alt="" />
            <h1 className='text-4xl bg-gradient-to-r from-blue-500 to-blue-300 text-transparent bg-clip-text font-medium'>Quizzy</h1>
          </div>
          <div>
            <div className='mb-4'>
              <h1 className='text-[#767474] text-center'>Create Account!</h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div className='space-y-2'>
                <input
                  className="placeholder:text-slate-400 block bg-white w-[50vh] border border-slate-300 rounded-md py-2 pl-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                  placeholder="First Name"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <input
                  className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                  placeholder="Last Name"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                <input
                  className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                  placeholder="Email Address"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <input
                  className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <input
                  className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                  placeholder="Confirm Password"
                  type="password"
                  name="c_password"
                  value={formData.c_password}
                  onChange={handleChange}
                />
              </div>
              <div className='flex flex-wrap justify-between gap-x-8 mt-2'>
                <div>
                  <input
                    type="checkbox"
                    id="agreed"
                    name="agreed"
                    checked={formData.agreed}
                    onChange={handleChange}
                  />
                  <label htmlFor="agreed" className='ms-1 text-sm'>I agree to the terms & condition</label>
                </div>
              </div>
              <div className='mt-5 space-x-5 m-auto flex items-center place-content-center'>
                <button type="submit" className='text-white text-md bg-gradient-to-r from-blue-500 to-blue-300 lg:px-4 lg:py-2 py-1 px-3 rounded-full'>Signup</button>
              </div>
            </form>
          </div>
        </div>
        <div  className=' w-1/2 hidden sm:block'>
          <img src="/public/images/Signin/SingUp.jpg" alt="" />
        </div>
      </div>
      <Footer/>
    </div>
  );
}
