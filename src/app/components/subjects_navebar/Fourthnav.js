import React from 'react'
import Link from 'next/link'
const Fourthnav = () => {
  return (
    <>
    <header className="text-gray-600 body-font shadow-xl  sticky top-0 bg-white z-20 py-2">
      <div className="container mx-auto flex flex-wrap p-0 flex-col md:flex-row items-center">
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 	w-full m-auto flex flex-wrap items-center text-base justify-center">
         <Link href={"/sem4/java"} className="mr-10  border-white border-2 hover:border-b-2 hover:border-b-black active:text-gray-400 focus:outline-none focus:border-b-black "> JAVA </Link>
        <Link href={"/sem4/software_engineering"} className="mr-10 border-white border-2 hover:border-b-black  focus:outline-none focus:border-b-black ">Software Engineering</Link>
        <Link href={"/sem4/cyber_security"} className="mr-10 border-white border-2 hover:border-b-black hover:border-2 focus:outline-none focus:border-b-black ">Cyber Security</Link>
        <Link href={"/sem4/ecommerce"} className="mr-10 border-white border-2 hover:border-b-black hover:border-2 focus:outline-none focus:border-b-black ">E-Commerce</Link>
        </nav>
      </div>
    </header>
    </>
  )
}

export default Fourthnav