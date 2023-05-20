/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Firstsemnav from '@/app/components/subjects_navebar/Firstsemnav'
import Office from "../components/subjects_cards/firstsem/Office";
import Clanguage from "../components/subjects_cards/firstsem/clang";
import Digital_electronics from "../components/subjects_cards/firstsem/digitalelectronics";
import English from "../components/subjects_cards/firstsem/english";
import Unit2 from "./msexcel/unit2/page";



const sem1 = () => {
  return (
    <>
      <Firstsemnav />
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
           <Office />
            <Clanguage />
           <Digital_electronics />
           <English />
           
            
          </div>
        </div>
      </section>
    </>
  );
};

export default sem1;



//just trying the fetching api