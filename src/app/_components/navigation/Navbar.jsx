import React from "react";
import Image from "next/image";

import { FaSearch, FaRegHeart } from "react-icons/fa";
import { IoCartOutline, IoPersonOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="text-center bg-white py-3 fixed top-0 w-screen z-20 border-b border-neutral-300">
      <div className="container mx-auto flex justify-between gap-10">
        <Image alt="logo" src="/assets/logo.png" width={100} height={70} />
        {/* search */}
        <div className="flex items-center text-neutral-400 gap-2 bg-neutral-100 border border-neutral-200 mr-auto rounded-md pl-4 w-1/4 py-1">
          <FaSearch /> Search
        </div>
        {/* links */}
        <nav className="flex flex-1 gap-8  items-center ml-10">
          {links.map((item, index) => (
            <p
              key={`nav-link-${index}`}
              className="first:font-bold first:opacity-100 opacity-50 hover:opacity-100 cursor-pointer duration-200"
            >
              {item}
            </p>
          ))}
        </nav>
        {/* icons */}
        <div className="flex items-center gap-7">
          <FaRegHeart size={23} />
          <IoCartOutline size={25} />
          <IoPersonOutline size={25} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const links = ["Home", "Products", "Contact", "About Us"];
