import Link from "next/link";
const Footer = () => {
  return (
    <footer className="text-[#80eaff] body-font bg-[#1d95ad] ">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <Link
            href={"/"}
            className="flex title-font font-medium items-center md:justify-start justify-center text-[#80eaff]"
          >
            <span className="ml-3 text-[#ffffff] text-xl">Lenotes</span>
          </Link>
          <p className="mt-2 text-sm text-[#ffffff]">
            Go with the flow
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-[#ffffff] tracking-widest text-sm mb-3">
              IMPORTANT TOPICS
            </h2>
            <nav className="list-none mb-10 hover:text-white">
              <li>
                <Link href={"/"} className="text-[#80eaff] hover:text-white">
                  First Link
                </Link>
              </li>

              <li>
                <Link href={"/"} className="text-[#80eaff] hover:text-white ">
                  Second Link
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-[#80eaff] hover:text-white">
                  Third Link
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-[#80eaff] hover:text-white">
                  Fourth Link
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full text-[#80eaff] px-4">
            <h2 className="title-font font-medium  text-[#ffffff] tracking-widest text-sm mb-3">
              IMPORTANT QUESTIONS
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link href={"/"} className=" hover:text-white">
                  First Link
                </Link>
              </li>
              <li>
                <Link href={"/"} className=" hover:text-white">
                  Second Link
                </Link>
              </li>
              <li>
                <Link href={"/"} className=" hover:text-white">
                  Third Link
                </Link>
              </li>
              <li>
                <Link href={"/"} className=" hover:text-white">
                  Fourth Link
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-[#ffffff] tracking-widest text-sm mb-3">
            BOOKS REFRENCES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link href={"/"} className=" hover:text-white">
                  First Link
                </Link>
              </li>
              <li>
                <Link href={"/"} className=" hover:text-white">
                  Second Link
                </Link>
              </li>
              <li>
                <Link href={"/"} className=" hover:text-white">
                  Third Link
                </Link>
              </li>
              <li>
                <Link href={"/"} className=" hover:text-white">
                  Fourth Link
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-[#ffffff] tracking-widest text-sm mb-3">
              CONTACT US
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link href={"/"} className="text-[#80eaff] hover:text-white">
                  First Link
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-[#80eaff] hover:text-white">
                  Second Link
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-[#80eaff] hover:text-white">
                  Third Link
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-[#80eaff] hover:text-white">
                  Fourth Link
                </Link>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2023 Lenotes —
            <Link
              href={"/"}
              rel="noopener noreferrer"
              className="text-[#80eaff] ml-1"
              target="_blank"
            >
              Rajen
            </Link>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <Link href={"/"} className="text-gray-500"></Link>
            <Link href={"/"} className="ml-3 text-gray-500"></Link>
            <Link href={"/"} className="ml-3 text-gray-500"></Link>
            <Link href={"/"} className="ml-3 text-gray-500"></Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
