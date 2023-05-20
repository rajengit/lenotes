import Firstsemnav from "@/app/components/subjects_navebar/Firstsemnav";
import React from "react";

const page = async ({ params }) => {
  const id = params.id;

  // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/?ids=${id}` );
  // const url = `https://jsonplaceholder.typicode.com/users/?ids=${id}`;
  const url = `https://jsonplaceholder.typicode.com/posts/?id=${id}`;

  // const option = {
  //   method: "GET",
  //   headers: {
  //     'Content-type': 'application/json; charset=UTF-8',
  //   },
  // };
  const res = await fetch(url);
  const data = await res.json();
  const mainData = data[0];

  return (
    <>
      <Firstsemnav />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto ">
          <div className="flex flex-wrap "></div>

          <div className="text-center ">
            <h1>dynamic route {id}</h1>
            {/* <h1>{mainData.id}</h1> */}
            <h1>{mainData.title}</h1>
            <p>{mainData.body}</p>
          </div>
        </div>
      </section>
      .
    </>
  );
};

export default page;
