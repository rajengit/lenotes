import Link from "next/link";
import React from "react";

const Title3 = (curElem) => {
  const { id, title, body } = curElem;
  return (
    <>
      <Link href={`/sem1/msexcel/unit3/${id}`}>
        <div className=""><h2 className="p-1 m-2 bg-gray-200 text-black hover:text-white hover:bg-slate-700">
          ({curElem} ){curElem.id}  ,
        </h2>
        </div>
        
      </Link>
    </>
  );
};

export default Title3;
