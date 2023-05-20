import Link from "next/link";
import React from "react";

const Titles2 = (curElem) => {
  const { id, title, body } = curElem;
  return (
    <>
      <Link href={`/sem1/msexcel/unit2/${id}`}>
        <div className=""><h2 className="p-1 m-2 bg-gray-200 text-black hover:text-white hover:bg-slate-700">
          ({curElem.id} ){curElem.title} {curElem.username} ,
        </h2>
        </div>
        
      </Link>
    </>
  );
};

export default Titles2;
