"use client"
import React, { useState } from 'react'
import { FiSearch } from "react-icons/fi";
import { GoHeart } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { RiUser3Line } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = () => {
  const [isopen,setisopen] = useState(false)
  return (
    <div className='w-[100vw] flex justify-evenly h-20 items-center'>
     <p className='font-extrabold font-serif'>cyber</p>
     <div className='flex items-center text-slate-400 sm:ml-5 sm:mr-5'>
     <span className='bg-slate-100 p-4 rounded-l-lg'><FiSearch className=''/></span>
     <input type="text" placeholder='search' className='bg-slate-100 p-3 w-80 rounded-r-lg '/>
     </div>
<div className='md:hidden'><button  onClick={()=>setisopen(!isopen)}><RxHamburgerMenu /></button></div>
{/* desktop version */}
<ul className={`${isopen ? "block" : "hidden"} hidden md:flex gap-5 ml-5 mr-5`} >
  <li>Home</li>
  <li>About</li>
  <li>Contact Us</li>
  <li>Blog</li>
  
</ul>
{/* icons */}
<ul className={`${isopen ? "block" :"hidden"} hidden md:flex gap-5 ml-5 mr-5`}>
  <span><GoHeart className='size-5'/></span>
  <span><IoCartOutline  className='size-5'/></span>
  <span><RiUser3Line  className='size-5'/></span>
</ul>
{/* mobile version */}

<ul className={`${isopen ? "block" :"hidden"}  absolute top-16 left-0 h-36 w-full mt-4 bg-white md:hidden`}>
<li className='mt-2 ml-4'>Home</li>
  <li className='mt-2 mb-2 ml-4'>About</li>
  <li className='mt-2 mb-2 ml-4'>Contact Us</li>
  <li className='mt-2 mb-2 ml-4'>Blog</li>
</ul>

<ul className={`${isopen ? "block" :"hidden"} md:hidden absolute top-24 right-5 flex flex-col   `}>
  <span><GoHeart className='size-5'/></span>
  <span><IoCartOutline  className='size-5 mt-2 mb-2'/></span>
  <span><RiUser3Line  className='size-5'/></span>
</ul>
    </div>
  )
}

export default Nav