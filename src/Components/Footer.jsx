import Link from 'next/link'
import React from 'react'
import UnderlinedLink from './UnderlinedLink'

export default function Footer() {
  return (
    <>
      <footer className='mt-6 px-4 lg:mx-40 py-8 flex flex-col justify-evenly gap-4 border-t'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-6 first:items-start items-start'>
          <div className='flex flex-col gap-1 opacity-60'>
            <p>Sudais</p>
            <p>Web Developer</p>
            <p>Roll Num.</p>
          </div>
          <div className='flex flex-col gap-3'>
            <h4 className='opacity-60 mb-4'>Links</h4>
            <Link href={"#"} className='link link-hover'>Home</Link>
            <Link href={"#"} className='link link-hover'>Shop</Link>
            <Link href={"#"} className='link link-hover'>About</Link>
            <Link href={"#"} className='link link-hover'>Contact</Link>
          </div>
          <div className='flex flex-col gap-3'>
            <h4 className='opacity-60 mb-4'>Help</h4>
            <Link href={"#"} className='link link-hover'>Payment Options</Link>
            <Link href={"#"} className='link link-hover'>Returns</Link>
            <Link href={"#"} className='link link-hover'>Privacy Policy</Link>
            <Link href={"#"} className='link link-hover'>Contact</Link>
          </div>
          <div className='flex flex-col items-start h-full'>
            <h4 className='opacity-60 mb-6'>Newsletter</h4>
            <div className='flex gap-3 items-end'>
              <input type="email" placeholder='Enter your Email Address' className='input input-bordered underline underline-offset-8' />
              <UnderlinedLink text={"SUBSCRIBE"} link={"#"} style={"text-sm"} />
            </div>
          </div>
        </div>
        <div>
          <p>&copy; 2022 Sudais. All rights reserved.</p>
        </div>

      </footer>
    </>
  )
}
