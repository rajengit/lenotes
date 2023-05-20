import Firstsemnav from "@/app/components/subjects_navebar/Firstsemnav";

import Titles2 from "@/app/components/titles_cards/titles2";
import Link from "next/link";

const Unit2 = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const res = await fetch (`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();
  const mainData = data;

  // const maindata = data.title;

  return (
    <>
      <Firstsemnav />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto text-center">
          <div className="flex flex-wrap ">
            
            <div className="w-full m-auto text-center py-2 text-gray-600 font-bold sticky top-16 md:top-12 bg-white "> <h1 >Office automation Unit-2 Topics</h1></div>
           
            {mainData.map((curElem) => {
              return <Titles2 key={curElem.id} {...curElem} />;
            })}
            ;
           
          </div>
        </div>
      </section>
    </>
  );
};

export default Unit2;