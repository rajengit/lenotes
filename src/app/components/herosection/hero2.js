import React from "react";
import Image from "next/image";
const Hero2 = () => {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              src="/computer.jpg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
            {/* <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"> */}
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              100% Free
            </h1>
            <p class="mb-8 leading-relaxed">
              We encourage you to take full advantage of the resources available
              here. Feel free to browse through our articles, study
              materials, and engage with our interactive features. Additionally,
              we are continuously updating our content to ensure it remains
              up-to-date and aligned with the latest developments in the field.
            </p>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero2;
