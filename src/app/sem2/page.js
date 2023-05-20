import React from "react";
import Secondnav from "../components/subjects_navebar/Secondnav";
import Database from "../components/subjects_cards/secondsem/Database";

import Datastructure from "../components/subjects_cards/secondsem/datastructure";
import Cnetworks from "../components/subjects_cards/secondsem/c_networks";
import Envieonment from "../components/subjects_cards/secondsem/environment";

const sem2 = () => {
  return (
    <>
      <Secondnav />
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <Database />
            <Datastructure />
           <Cnetworks/>
           <Envieonment/>
          </div>
        </div>
      </section>
    </>
  );
};

export default sem2;
