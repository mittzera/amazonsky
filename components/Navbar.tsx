"use client";
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { navItems } from "@/data";

interface NavLink {
  name: string;
  link: string;
}

const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar border-b-[1px] border-b-[#3F3E45] bg-primary bg-opacity-30 relative z-[99999999999999999]">
      <a href={`/`}>
        <img
          src="/logo.png"
          alt="hoobank"
          className="w-[150px] h-[75px] ml-5"
        />
      </a>

      <ul className="list-none md:flex hidden justify-end items-center flex-1">
        {navItems.map((nav: NavLink, index: number) => (
          <li
            key={nav.link}
            className={`hover:text-secondary active:text-terciary font-poppins font-normal cursor-pointer text-sm md:text-sm max-[800px]:text-lg lg:text-2xl   ${
              index === navItems.length - 1 ? "mr-10" : "mr-10"
            } text-white`}
          >
            <a href={nav.link}>{nav.name}</a>
          </li>
        ))}
      </ul>

      <div className="md:hidden flex flex-1 justify-end items-center relative z-[9999]">
        <img
          src={toggle ? "/close.svg" : "/menu.svg"}
          alt="menu"
          className="w-[28px] h-[28px] object-contain mr-4"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black absolute top-20 w-screen rounded-xl`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1 z-[9999999]">
            {navItems.map((nav: NavLink, index: number) => (
              <li
                key={nav.link}
                className={`font-poppins hover:text-secondary active:text-terciary font-normal text-center cursor-pointer text-[22px] ${
                  index === navItems.length - 1 ? "mb-0" : "mb-4"
                } text-white`}
              >
                <a href={nav.link}>{nav.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
