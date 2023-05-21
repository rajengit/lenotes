import Unit from "@/app/sem1/msexcel/unit1/page";
import Unit2 from "@/app/sem1/msexcel/unit2/page";
import Link from "next/link";
import React from "react";

const Office = () => {
  return (
    <>
    
      <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
      <Link href={"/sem1/msexcel"}>
        <div className="h-full p-6 rounded-lg border-2 border-[#1d95ad] active:bg-[#9defff62]  active:border-[#1bb3d2] flex flex-col  shadow-2xl md:hover:shadow-2xl relative overflow-hidden">
          
          <h1 className="text-4xl  text-[#2a8192] pb-4 mb-4 border-b border-[#42acc14f]  leading-none">
            Office automation
          </h1>
          <p className="flex items-center  text-[#549fae] mb-2">Unit 1</p>
          <p className="flex items-center  text-[#549fae] mb-2">Unit 2</p>
          <p className="flex items-center  text-[#549fae] mb-2">Unit 3</p>
          <p className="flex items-center  text-[#549fae] mb-2">Unit 4</p>
          <p className="flex items-center  text-[#549fae] mb-2">Unit 5</p>
        </div>
        </Link>
        
      </div>
      
    </>
  );
};

export default Office;
