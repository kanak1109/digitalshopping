import React from 'react'
import  LATEST  from '../assets/assets/latest'
import Item from './Item'

const NewCollection = () => {
  return (
    <section>
    <div  className='max_padd_container py-12 xl:py-28 xl:w-[88%]'>
        <h3 className='h3 text-center'>Latest Products</h3>
        <hr className='h-[3px] md:w-1/2 mx-auto bg-gradient-to-1 from-transparent via-black to-transparent mb-16' />
        <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'>
            {LATEST.map((item)=>(
               <Item key={item.id} id={item.id} image={item.image} old_price={item.old_price} new_price={item.new_price} name={item.name}/>
            ))}
        </div>
    </div>
   </section>
  )
}

export default NewCollection