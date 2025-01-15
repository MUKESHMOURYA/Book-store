import React from 'react'

const Cards = ({item}) => {
  return (
    <>
     <div  className='mb-8'>
     <div className=" w-[90%] border-2 hover:scale-105 duration-200">
  <figure className='w-[100%]'>
    <img
      src={item.image}
      alt="Shoes"/>
  </figure>
  <div className="card-body p-4">
   <div className='flex justify-between flex-wrap'> <h2>
      {item.name}</h2>
      <div className='pl-2 bg-red-400 w-12 rounded-lg ml-3'> {item.Category}</div></div>
    
    <p>{item.title}</p>
    <div className=" justify-between flex pt-4 px-8 flex-wrap h-[auto] ">
      <div className="border-2 rounded-lg ">$-{item.price}</div>
      <div className="sm:text-sm border-2 rounded-lg hover:bg-pink-400 hover:text-white cursor-pointer">Buy now!</div>
    </div>
  </div>
</div></div> 
    </>
  )
}

export default Cards
