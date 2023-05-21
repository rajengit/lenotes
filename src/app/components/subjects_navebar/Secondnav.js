import Link from "next/link";

const Secondnav = () => {
  return (
    <header className="text-gray-600 body-font shadow-xl   sticky top-[63px] p-1 md:sticky md:top-[51px] bg-white z-10 ">
      <div className="container mx-auto flex flex-wrap p-0 flex-col md:flex-row items-center">
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 text-[#1d95ad]	w-full m-auto flex flex-wrap items-center text-base md:justify-center md:gap-10 gap-1 justify-evenly">
         <Link href={"/sem2/database"} className="  border-white border-2 hover:border-b-[#1d95ad] active:text-[#4bd5f1] focus:outline-none focus:border-b-[#1d95ad]  ">DBMS </Link>
        <Link href={"/sem2/data_structure"} className=" border-white border-2 hover:border-b-[#1d95ad] active:text-[#4bd5f1] focus:outline-none focus:border-b-[#1d95ad] ">Data Structure</Link>
        <Link href={"/sem2/computer_networks"} className=" border-white border-2 hover:border-b-[#1d95ad] active:text-[#4bd5f1] focus:outline-none focus:border-b-[#1d95ad] ">Computer Networks</Link>
        <Link href={"/sem2/environmental_science"} className=" border-white border-2 hover:border-b-[#1d95ad] active:text-[#4bd5f1] focus:outline-none focus:border-b-[#1d95ad] ">Environmental Science</Link>
        </nav>
      </div>
    </header>
  );
};

export default Secondnav;
