import Link from "next/link";

const Header = () => {
  return (
    // <header className="bg-cyan-100  flex flex-col md:flex-row items-center  justify-center h-16 w-[100%] m-auto">
    //   <div className="mx-4">
    //     <Link href="/">
    //       <div className=" font-bold text-xl tracking-wide">Lenotes</div>
    //     </Link>
    //   </div>
    //   <ul className="flex items-center  space-x-2  text-sm">
    //     <Link href="/">
    //       <li className="">HOME</li>
    //     </Link>
    //     <Link href="/sem1">
    //       <li className="">SEM1</li>
    //     </Link>

    //     <Link href="/About">
    //       <li className="">SEM2</li>
    //     </Link>

    //     <Link href="/About">
    //       <li className="">SEM3</li>
    //     </Link>
    //     <Link href="/About">
    //       <li className="">SEM4</li>
    //     </Link>
    //     <Link href="/About">
    //       <li className="">SEM5</li>
    //     </Link>

    //     <Link href="/About">
    //       <li className="">SEM6</li>
    //     </Link>
    //     <Link href="/About">
    //       <li className="">About</li>
    //     </Link>
    //     <Link href="/About">
    //       <li className=""> Contact</li>
    //     </Link>
    //   </ul>
    //   <div className=" text-sm mx-2 ">
    //     <button>Sign In</button>
    //   </div>
    // </header>
    <header className=" body-font sticky top-0 z-50 bg-[#1d95ad] md:p-2 ">
      <div className="container mx-auto flex flex-wrap p-0  flex-col md:flex-row items-center">
        <div className="flex title-font font-medium items-center text-gray-600 mb-0 md:mb-0">
          
         <Link href={"/"}> <span className="ml-3 text-[#fafeff] text-xl ">Lenotes</span></Link>
         </div>
        <nav className="md:ml-auto md:mr-auto text-white p-1 flex flex-wrap items-center text-base justify-center  ">
        <Link href={"/sem1"} className="mx-2 md:mx-4  border-[#1d95ad] border-2  hover:border-b-[#92edff] hover:border-2 focus:outline-none focus:border-b-[#92edff]  ">1sem</Link>  
        <Link href={"/sem2"}  className="mx-2 md:mx-4  border-[#1d95ad] border-2 hover:border-b-[#92edff] hover:border-2 focus:outline-none focus:border-b-[#92edff] ">2sem</Link>
        <Link href={"/sem3"} className="mx-2 md:mx-4  border-[#1d95ad] border-2 hover:border-b-[#92edff] hover:border-2 focus:outline-none focus:border-b-[#92edff]">3sem</Link>
        <Link href={"/sem4"}  className="mx-2 md:mx-4  border-[#1d95ad] border-2 hover:border-b-[#92edff] hover:border-2 focus:outline-none focus:border-b-[#92edff] ">4sem</Link>
        <Link href={"/sem5"} className="mx-2 md:mx-4  border-[#1d95ad] border-2 hover:border-b-[#92edff] hover:border-2 focus:outline-none focus:border-b-[#92edff] ">5sem</Link>
        <Link href={"/sem6"}  className="mx-2 md:mx-4  border-[#1d95ad] border-2 hover:border-b-[#92edff] hover:border-2 focus:outline-none focus:border-b-[#92edff] ">6sem</Link>
        </nav>
        <button className="md:inline-flex items-center absolute right-2 top-1 bg-gray-100 border-0 py-0 px-2 focus:outline-none hover:bg-gray-200 rounded text-base mt-0 md:mt-0 hidden">
          sign in
          
        </button>
      </div>
    </header>
  );
};

export default Header;
