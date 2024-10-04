"use client";
import React from "react";
import { RxCross2 } from "react-icons/rx";
import { FaRegCircleUser } from "react-icons/fa6";
import { HiMenuAlt1 } from "react-icons/hi";
import { FaRegEdit } from "react-icons/fa";
import { BiLogOutCircle } from "react-icons/bi";
import Link from "next/link";

const profileMenuItems = [
  {
    label: "My Profile",
    icon: FaRegCircleUser,
  },
  {
    label: "Edit Profile",
    icon: FaRegEdit,
  },
  {
    label: "Sign Out",
    icon: BiLogOutCircle,
  },
];

export function Appbar() {
  const [openNav, setOpenNav] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {["Home", "About", "Contact", "Signup"].map((item, index) => (
        <li key={index} className="p-1 myfont">
          <Link href={`/${item.toLowerCase()}`} className="flex items-center">
            {item}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <nav className="sticky top-0 z-10 h-max w-full bg-gray-100 px-4 py-2 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <a href="#" className="mr-4 cursor-pointer py-1.5 myfont-bold">
          Exclusive
        </a>
        <div className="mr-4 hidden lg:block">{navList}</div>
        <div className="relative hidden lg:block">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center rounded-full p-1"
          >
            <img
              className="h-10 w-10 rounded-full border-2 border-gray-300"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              alt="tania andrew"
            />
          </button>
          {isMenuOpen && (
            <ul className="absolute right-0 mt-2 w-48 rounded-lg bg-white p-2 shadow-lg">
              {profileMenuItems.map(({ label, icon }, key) => {
                const isLastItem = key === profileMenuItems.length - 1;
                return (
                  <li
                    key={label}
                    className={`flex items-center gap-2 p-2 rounded cursor-pointer ${
                      isLastItem ? "hover:bg-red-500/10" : "hover:bg-gray-100"
                    }`}
                    onClick={closeMenu}
                  >
                    {React.createElement(icon, {
                      className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                    })}
                    <Link href={isLastItem ? "/login" : `/${label.toLowerCase().replace(" ", "-")}`}>
                      <span className={isLastItem ? "text-red-500" : ""}>
                        {label}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        <button
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <RxCross2 className="h-6 w-6" />
          ) : (
            <HiMenuAlt1 className="h-6 w-6" />
          )}
        </button>
      </div>
      {openNav && (
        <div className="mt-4 lg:hidden">
          {navList}
          <div className="relative mt-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center rounded-full p-1"
            >
              <img
                className="h-10 w-10 rounded-full border-2 border-gray-300"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                alt="tania andrew"
              />
            </button>
            {isMenuOpen && (
              <ul className="absolute right-0 mt-2 w-48 rounded-lg bg-white p-2 shadow-lg">
                {profileMenuItems.map(({ label, icon }, key) => {
                  const isLastItem = key === profileMenuItems.length - 1;
                  return (
                    <li
                      key={label}
                      className={`flex items-center gap-2 p-2 rounded cursor-pointer ${
                        isLastItem ? "hover:bg-red-500/10" : "hover:bg-gray-100"
                      }`}
                      onClick={closeMenu}
                    >
                      {React.createElement(icon, {
                        className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                      })}
                      <span className={isLastItem ? "text-red-500" : ""}>
                        {label}
                      </span>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
