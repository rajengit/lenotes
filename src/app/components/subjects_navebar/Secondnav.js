import Link from "next/link";

const Secondnav = () => {
  return (
    <header className="text-gray-600 body-font shadow-xl  sticky top-0 bg-white z-20 py-2">
      <div className="container mx-auto flex flex-wrap p-0 flex-col md:flex-row items-center">
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 	w-full m-auto flex flex-wrap items-center text-base justify-center">
         <Link href={"/sem2/database"} className="mr-10  border-white border-2 hover:border-b-2 hover:border-b-black focus:outline-none focus:border-b-black  ">DBMS </Link>
        <Link href={"/sem2/data_structure"} className="mr-10 border-white border-2 hover:border-b-black  focus:outline-none focus:border-b-black ">Data Structure</Link>
        <Link href={"/sem2/computer_networks"} className="mr-10 border-white border-2 hover:border-b-black hover:border-2 focus:outline-none focus:border-b-black ">Computer Networks</Link>
        <Link href={"/sem2/environmental_science"} className="mr-10 border-white border-2 hover:border-b-black hover:border-2 focus:outline-none focus:border-b-black ">Environmental Science</Link>
        </nav>
      </div>
    </header>
  );
};

export default Secondnav;
