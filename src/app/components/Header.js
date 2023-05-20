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
    <header className=" body-font  ">
      <div className="container mx-auto flex flex-wrap p-3  flex-col md:flex-row items-center">
        <div className="flex title-font font-medium items-center text-gray-600 mb-4 md:mb-0">
          
         <Link href={"/"}> <span className="ml-3 text-xl ">Lenotes</span></Link>
         </div>
        <nav className="md:ml-auto md:mr-auto text-gray-600  flex flex-wrap items-center text-base justify-center ">
        <Link href={"/sem1"} className="mx-2 md:mx-4 my-2 border-white border-2 hover:border-b-black hover:border-2 focus:outline-none focus:border-b-black  ">1sem</Link>  
        <Link href={"/sem2"}  className="mx-2 md:mx-4 my-2 border-white border-2 hover:border-b-black hover:border-2 focus:outline-none focus:border-b-black ">2sem</Link>
        <Link href={"/sem3"} className="mx-2 md:mx-4 my-2 border-white border-2 hover:border-b-black hover:border-2 focus:outline-none focus:border-b-black ">3sem</Link>
        <Link href={"/sem4"}  className="mx-2 md:mx-4 my-2 border-white border-2 hover:border-b-black hover:border-2 focus:outline-none focus:border-b-black ">4sem</Link>
        <Link href={"/sem5"} className="mx-2 md:mx-4 my-2 border-white border-2 hover:border-b-black hover:border-2 focus:outline-none focus:border-b-black ">5sem</Link>
        <Link href={"/sem6"}  className="mx-2 md:mx-4 my-2 border-white border-2 hover:border-b-black hover:border-2 focus:outline-none focus:border-b-black ">6sem</Link>
        </nav>
        <button className="inline-flex items-center absolute right-2 top-2 bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-0 md:mt-0">
          sign in
          
        </button>
      </div>
    </header>
  );
};

export default Header;
