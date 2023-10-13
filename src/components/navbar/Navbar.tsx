import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className=' bg-blue-700 flex items-center justify-between px-12 py-6'>
        <ul className='flex items-center justify-between w-full'>
            <li><Link href="/">Homepage</Link></li>
            <li><Link href="/dashboard">Client-Dashboard</Link></li>
            <li><Link href="/blog">Server-Blog</Link></li>
            <li><Link href="/api/auth/signin">Signin</Link></li>
            <li><Link href="/api/auth/signout">Signout</Link></li>
        </ul>
    </div>
  )
}

export default Navbar