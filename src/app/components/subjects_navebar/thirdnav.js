import React from 'react'
import Link from 'next/link'
const Thirdnav = () => {
  return (
    <>
    <header className="text-gray-600 body-font shadow-xl  sticky top-[63px] p-1 md:sticky md:top-[51px] bg-white z-10 ">
      <div className="container mx-auto flex flex-wrap p-0 flex-col md:flex-row items-center">
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 text-[#1d95ad]	w-full m-auto flex flex-wrap items-center text-base md:justify-center md:gap-10 gap-1 justify-evenly">
         <Link href={"/sem3/web_designing"} className="   border-white border-2 hover:border-b-2 hover:border-b-[#1d95ad] active:text-[#4bd5f1] focus:outline-none focus:border-b-[#1d95ad] ">Web Designing </Link>
        <Link href={"/sem3/Operating_system"} className=" border-white border-2 hover:border-b-[#1d95ad] active:text-[#4bd5f1] focus:outline-none focus:border-b-[#1d95ad] ">Operating System</Link>
        <Link href={"/sem3/linux_server"} className=" border-white [#1d95ad]-2 hover:border-b-[#1d95ad] active:text-[#4bd5f1] focus:outline-none focus:border-b-[#1d95ad] ">Linux Server </Link>
        <Link href={"/sem3/relational_dbms"} className=" border-white [#1d95ad]-2  hover:border-b-[#1d95ad] active:text-[#4bd5f1] focus:outline-none focus:border-b-[#1d95ad] ">RDBMS </Link>
        </nav>
      </div>
    </header>
    </>
  )
}

export default Thirdnav