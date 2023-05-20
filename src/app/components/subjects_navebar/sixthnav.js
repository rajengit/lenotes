import Link from "next/link";

const Sixthnav = () => {
  return (
    <header className="text-gray-600 body-font shadow-xl  sticky top-0 bg-white z-20 py-2">
      <div className="container mx-auto flex flex-wrap p-0 flex-col md:flex-row items-center">
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 	w-full m-auto flex flex-wrap items-center text-base justify-center">
         <Link href={"/sem6/cloud_computing"} className="mr-10  border-white border-2 hover:border-b-2 hover:border-b-black focus:outline-none focus:border-b-black  ">Cloud Cumputing </Link>
        <Link href={"/sem6/tally"} className="mr-10 border-white border-2 hover:border-b-black  focus:outline-none focus:border-b-black ">Tally</Link>
        <Link href={"/sem6/social_media"} className="mr-10 border-white border-2 hover:border-b-black hover:border-2 focus:outline-none focus:border-b-black ">Social Media</Link>
        <Link href={"/sem6/videoediting"} className="mr-10 border-white border-2 hover:border-b-black hover:border-2 focus:outline-none focus:border-b-black ">Video Editing</Link>
        </nav>
      </div>
    </header>
  );
};

export default Sixthnav;
