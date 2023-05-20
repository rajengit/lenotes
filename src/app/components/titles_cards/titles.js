import Link from "next/link";
import React from "react";

const Titles = (curElem) => {
  const { id, title, body } = curElem;
  return (
    <>
      <Link href={`/sem1/msexcel/unit1/${id}`}>
        <div className=""><h2 className="p-1 m-2 bg-gray-200 text-black hover:text-white hover:bg-slate-700">
          ({curElem.id} ){curElem.name} {curElem.username} ,
        </h2>
        </div>
        
      </Link>
    </>
  );
};

export default Titles;
