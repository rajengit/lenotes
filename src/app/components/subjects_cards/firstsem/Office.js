import Unit from "@/app/sem1/msexcel/unit1/page";
import Unit2 from "@/app/sem1/msexcel/unit2/page";
import Link from "next/link";
import React from "react";

const Office = () => {
  return (
    <>
    
      <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
      <Link href={"/sem1/msexcel"}>
        <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col  hover:shadow-2xl relative overflow-hidden">
          <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
            START
          </h2>
          <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
            Office automation
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
  );
};

export default Office;
