import React from 'react'

export default function Features() {
  return (
    <>
      <section id='features' className='mx-40 my-12 grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div>
          <h2 className='font-medium text-4xl mb-4'>Free Delivery</h2>
          <p className='text-sm opacity-60'>For all orders over $50, Lorem ipsum dolor sit amet.</p>
        </div>
        <div>
          <h2 className='font-medium text-4xl mb-4'>90 Days Return</h2>
          <p className='text-sm opacity-60'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aliquam, deserunt commodi id sed aperiam?</p>
        </div>
        <div>
          <h2 className='font-medium text-4xl mb-4'>Secure Payment</h2>
          <p className='text-sm opacity-60'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aliquam, deserunt commodi id sed aperiam?</p>
        </div>
      </section>
    </>
  )
}
