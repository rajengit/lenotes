import React from "react";
import Image from "next/image";
const Hero1 = () => {
  return (
    <>
      <section className="text-black body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Our Plans !!
              {/* <br className="hidden lg:inline-block">readymade gluten */}
            </h1>
            <p className="mb-8 leading-relaxed text-[#0c2226] text-[15px] ">
             This website is designed to be your go-to resource for BCA notes and educational content.Whether you are a student looking to enhance your understanding of programming, database management, web development, or any other BCA-related subjects .{/* or someone passionate about technology seeking to broaden your knowledge, we have you covered. */}
            </p>
            {/* <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button>
            </div> */}
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            {/* <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"> */}
            <Image
              src="/girl.jpg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
         
        </div>
      </section>
    </>
  );
};

export default Hero1;
