import React from 'react'
import Link from 'next/link'

const Cyber_security = () => {
  return (
    <>
    <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
      <Link href={"/sem4/cyber_security"}>
        <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col hover:shadow-2xl relative overflow-hidden">
          <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
            START
          </h2>
          <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
          Cyber Security
          </h1>
          <p className="flex items-center text-gray-600 mb-2">Unit 1</p>
          <p className="flex items-center text-gray-600 mb-2">Unit 2</p>
          <p className="flex items-center text-gray-600 mb-2">Unit 3</p>
          <p className="flex items-center text-gray-600 mb-2">Unit 4</p>
          <p className="flex items-center text-gray-600 mb-2">Unit 5</p>
        </div>
        </Link>
      </div>
      
    </>
        

  )
}

export default Cyber_security