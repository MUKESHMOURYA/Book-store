import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

const Login = () => {

const {
  register,
  handleSubmit,

  formState: { errors },
} = useForm()

const onSubmit = (data) => console.log(data)
  return (
    <>
      <div>     
<dialog id="my_modal_3" className="modal rounded-xl p-8 py-16 ">
  {/* Email */}
  <div className="modal-box ">
    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
      <button  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"><a href='/'>✕</a></button>
   
    <h3 className="font-bold text-lg pb-4">Login</h3>
   <div>
    <span className='space-y-3'>Email</span><br/><input type='email' placeholder='Enter your email' className='w-80 px-2 py-1 border rounded-md outline-none'
   {...register("email",{required:true})}
  /> {errors.email &&<span className='text-red-500 text-sm'><br/>This filed is required.</span>}
   </div>
   {/* Password */}
   <div >
    <span className='space-y-3'>Password</span ><br/><input type='password' placeholder='Enter your passwords' className='w-80 px-2 py-1 border rounded-md outline-none'
     {...register("password",{required:true})}
    //  aria-invalid={errors.password ? "true" : "Password is not valid."}
     />
     {errors.password &&<span className='text-red-500 text-sm'><br/>This filed is required.</span>}

   </div>
   {/* Button */}
   <div className='flex justify-between mt-6  w-80'>
    <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200 '>Login</button>
   <p>Not registered!<Link to={'/signup'}
    // onClick={handleClick()}
    className='underline text-blue-500 cursor-pointer '>
    Signup
    </Link></p>
   </div>
   <div className='pt-10'><p>Welcome back! Please enter your credentials to log in.</p></div>
   </form>
  </div>
  
  
</dialog>
      </div>
    </>
  )
}

export default Login
