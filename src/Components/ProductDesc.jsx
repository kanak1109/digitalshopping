import React from 'react'

const ProductDesc = () => {
  return (
    <div>
        <div className='flex mb-3 gap-4'> 
            <button className='btn_dark_rounded !rounded-none !text-xs !py-[6px] w-36'>
                Description
            </button>
            <button className='btn_dark_outline !rounded-none !text-xs !py-[6px] w-36'>
               Care Guide
            </button>
            <button className='btn_dark_outline !rounded-none !text-xs !py-[6px] w-36'>
               Size Guide
            </button>
        </div>
        <div className='flex flex-col pb-16'>
            <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt veritatis sed dignissimos optio voluptatum quae iure soluta natus asperiores laudantium saepe aliquam reiciendis dolore, quas impedit porro aperiam. Laborum, eveniet.</p>
        <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi eum fugiat esse earum optio, porro quis, harum perferendis aspernatur, dicta voluptatibus temporibus voluptatem beatae facilis officiis quod nostrum odio sint?</p>
        </div>
    </div>
  )
}

export default ProductDesc