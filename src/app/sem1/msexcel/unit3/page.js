import Firstsemnav from "@/app/components/subjects_navebar/Firstsemnav";
import Link from "next/link";

import React from "react";

const Unit3 = () => {
  return (
    <>
      <Firstsemnav />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto text-center">
          <div className="flex flex-wrap ">
            <div className="w-full m-auto text-center py-2 text-gray-600 font-bold sticky top-16 md:top-12 bg-white ">
              {" "}
              <h1>Office automation Unit-3 Topics</h1>
            </div>

            <Link href={"/sem1/msexcel/unit3/solution/unit3"}>
              <div className="">
                <h2 className="p-1 m-2 bg-gray-200 text-black hover:text-white hover:bg-slate-700">
                  Spreadsheet Basics: Overview of Spreadsheet,Features,
                </h2>
              </div>
            </Link>
           
            <Link href={""}>
              <div className="">
                <h2 className="p-1 m-2 bg-gray-200 text-black hover:text-white hover:bg-slate-700">
                  Creating a New Worksheet,
                </h2>
              </div>
            </Link>
            <Link href={""}>
              <div className="">
                <h2 className="p-1 m-2 bg-gray-200 text-black hover:text-white hover:bg-slate-700">
                  Selecting Cells,
                </h2>
              </div>
            </Link>
            <Link href={""}>
              <div className="">
                <h2 className="p-1 m-2 bg-gray-200 text-black hover:text-white hover:bg-slate-700">
                Entering and Editing Text, 
                </h2>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Unit3;
