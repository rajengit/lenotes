
import Firstsemnav from '@/app/components/subjects_navebar/Firstsemnav'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
    <Firstsemnav/>
    <div className='w-full h-screen'>
    <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap">
            <div className="xl:w-1/4 lg:w-1/2 md:w-full  px-8 py-6 border-l-2  border-[#464f85] border-opacity-30 hover:shadow-2xl md:hover:shadow-2xl ">
              <Link href={"/sem1/msexcel/unit1"}>
                <h2 className="text-lg sm:text-xl text-white bg-[#395B64]  font-medium title-font mb-2 text-center">
                  Unit - 1
                </h2>
                <p className="leading-relaxed text-base mb-4">
                  Introduction to Office Automation, Office : Starting Word
                  Processor. WordProcessing, Spreadsheet......
                </p>
              </Link>
            </div>

            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2  border-[#464f85] border-opacity-30 hover:shadow-2xl md:hover:shadow-2xl ">
              <Link href={"/sem1/msexcel/unit2"}>
                <h2 className="text-lg sm:text-xl text-white bg-[#395B64] font-medium title-font mb-2 text-center">
                  Unit - 2
                </h2>
                <p className="leading-relaxed text-base mb-4    b">
                  Graphics: Clipart, Insert Picture,Templates: Template
                  Types....
                </p>
              </Link>
            </div>

            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2  border-[#464f85] border-opacity-30 hover:shadow-2xl md:hover:shadow-2xl">
              <Link href={"/sem1/msexcel/unit3"}>
                <h2 className="text-lg sm:text-xl  text-white bg-[#395B64]  font-medium title-font mb-2  text-center">
                  Unit - 3
                </h2>
                <p className="leading-relaxed text-base mb-4">
                  Spreadsheet Basics: Overview of Spreadsheet, Features,
                  Creating a New Worksheet.....
                </p>
              </Link>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2  border-[#464f85] border-opacity-30 hover:shadow-2xl md:hover:shadow-2xl">
              <h2 className="text-lg sm:text-xl text-white bg-[#395B64]  font-medium title-font mb-2 text-center">
                Unit - 4
              </h2>
              <p className="leading-relaxed text-base mb-4">
                Function in Spreadsheet, Functions by category: Date and Time
                functions....
              </p>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2  border-[#464f85] border-opacity-30 hover:shadow-2xl md:hover:shadow-2xl">
              <h2 className="text-lg sm:text-xl text-white bg-[#395B64]  font-medium title-font mb-2 text-center">
                Unit - 5
              </h2>
              <p className="leading-relaxed text-base mb-4">
                Creating Presentations: Using Blank Presentation Option, Using
                Design Template....
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default page