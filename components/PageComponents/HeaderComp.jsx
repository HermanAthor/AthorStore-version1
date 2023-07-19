import Link from 'next/link'
import React from 'react'

// const styles = {
//   header:{
//     display:'flex',
//     justifyContent:'between', 
//     backgroundColor:'transparent', 
//     color:'black'
    
//   },
//   logo:{
//     backgroundColor:'green', 
//     padding:'30px'
//   },
//   nav:{},
//   nav_el:{}
// }

const HeaderComp = () => {
  return (
    <header className="flex bg-slate-300 justify-between items-center px-3 drop-shadow-2xl border border-b-black py-4 fixed top-0 w-full z-50" >
        <div  className='font-bold text-3xl'>
          <h1>
            <span className='text-slate-500'>Athor</span>
            <span className='dark:text-slate-400'>Store</span>
          </h1>
        </div>
        <ul className='flex justify-between items-center'>
            <li className='px-2  text-2xl hover:text-gray-700'>
              <Link href="/home">Home</Link>
            </li>
            <li className='px-2  text-2xl hover:text-gray-700'>
              <Link href="/about">About</Link>
            </li>
            <li className='px-2  text-2xl hover:text-gray-700'>
              <Link href="/cart">Cart</Link>
            </li>
        </ul>
    </header>
  )
}

export default HeaderComp