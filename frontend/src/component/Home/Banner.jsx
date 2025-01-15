import React from 'react'
import frontimage from '../../assets/frontpreview.png'
const Banner = () => {
  return (
    <div className='max-w-screen-2xl container max-auto md:px-20 px-4 flex flex-col md:flex-row my-6'>
     <div className='w-full order-2 md:order-1 md:w-1/2 p-6'>
    <div className='space-y-12 mt-12 md:mt-32'>
    <h1 className='text-4xl font-bold'>Hello welcomes here to learn something
     <span className='text-pink-500'> new everyday!!!!!</span>
     </h1>
     <p className='text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
         et totam. Tempora amet atque expedita, quae corrupti totam sed
          pariatur corporis at veniam est voluptas animi!</p>
    </div>
    <label htmlFor="email" className='  mt-8 input input-bordered flex items-center gap-2 '>
 
        <input type='email' className='grow border-2' placeholder='Gmail'/>
    </label>
    <button className='w-36 h-10 border-red-300  mt-6 rounded-xl bg-orange-300'>Secandrey</button>
     </div>
     <div className='w-full order-1 md:w-1/2  flex items-center justify-center'>
     <img src={frontimage} alt='image not working' className='w-96 h-96'/>
     </div>
    </div>
  )
}

export default Banner
