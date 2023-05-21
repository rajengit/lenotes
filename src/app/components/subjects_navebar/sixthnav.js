import Link from "next/link";

const Sixthnav = () => {
  return (
    <header className="text-gray-600 body-font shadow-xl   sticky top-[63px] p-1 md:sticky md:top-[51px] bg-white z-10 ">
      <div className="container mx-auto flex flex-wrap p-0 flex-col md:flex-row items-center">
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 text-[#2a7e8f]	w-full m-auto flex flex-wrap items-center text-base md:justify-center md:gap-10 gap-1 justify-evenly">
         <Link href={"/sem6/cloud_computing"} className="  border-white border-2 hover:border-b-2 hover:border-b-[#1d95ad] active:text-[#4bd5f1] focus:outline-none focus:border-b-[#1d95ad]">Cloud Cumputing </Link>
        <Link href={"/sem6/tally"} className=" border-white border-2 hover:border-b-[#1d95ad] active:text-[#4bd5f1] focus:outline-none focus:border-b-[#1d95ad] ">Tally</Link>
        <Link href={"/sem6/social_media"} className=" border-white border-2 hover:border-b-[#1d95ad] active:text-[#4bd5f1] focus:outline-none focus:border-b-[#1d95ad] ">Social Media</Link>
        <Link href={"/sem6/videoediting"} className=" border-white border-2 hover:border-b-[#1d95ad] active:text-[#4bd5f1] focus:outline-none focus:border-b-[#1d95ad] ">Video Editing</Link>
        </nav>
      </div>
    </header>
  );
};

export default Sixthnav;
