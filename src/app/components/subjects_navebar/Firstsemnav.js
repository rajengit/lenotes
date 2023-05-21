import Link from "next/link";

const Firstsemnav = () => {
  return (
    <header className=" body-font  shadow-xl sticky top-[63px] p-1 md:sticky  md:top-[51px] bg-white z-10 ">
      <div className="container mx-auto flex flex-wrap  flex-col md:flex-row  items-center">
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 text-[#2a7e8f]	w-full m-auto flex flex-wrap items-center text-base md:justify-center md:gap-10 gap-1 justify-evenly">
         <Link href={"/sem1/msexcel"} className="  border-white border-2 hover:border-b-2 hover:border-b-[#1d95ad] active:text-[#4bd5f1]  focus:outline-none focus:border-b-[#1d95ad] ">Office automation </Link>
        <Link href={"/sem1/candc++"} className="  border-white border-2 hover:border-b-[#1d95ad] active:text-[#4bd5f1] focus:outline-none focus:border-b-[#1d95ad] ">C and C++</Link>
        <Link href={"/sem1/digitalelectronics"} className=" border-white border-2 hover:border-b-[#1d95ad] hover:border-2 active:text-[#4bd5f1] focus:outline-none focus:border-b-[#1d95ad] ">Digital Electronics</Link>
        <Link href={"/sem1/english"} className=" border-white border-2 hover:border-b-[#1d95ad] hover:border-2 active:text-[#4bd5f1] focus:outline-none focus:border-b-[#1d95ad] ">Communicative English</Link>
        </nav>
      </div>
    </header>
  );
};

export default Firstsemnav;
