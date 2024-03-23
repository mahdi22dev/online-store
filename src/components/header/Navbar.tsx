import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { Badge } from "../ui/badge";
import { CiUser } from "react-icons/ci";
import Saerch from "./Saerch";
import Link from "next/link";
import ResponsiveNav from "./ResponsiveNav";

function Navbar() {
  return (
    <nav className="w-full fixed top-0 h-[75px] shadow-lg font-medium">
      <div className="w-full max-w-5xl flex justify-between items-center mx-auto mt-3 px-3">
        {/* links */}
        <div className="flex sm:hidden justify-between items-center">
          <ResponsiveNav /> <Saerch />
        </div>
        <div className="gap-2 justify-between items-center capitalize hidden sm:flex">
          <Link href={"/home"}>home</Link>
          <Link href={"/products"}>products</Link>
          <Link href={"/devices"}>devices</Link>
        </div>

        {/* logo */}
        <Link
          href={"/"}
          className="flex flex-col space-y-2 text-center justify-center items-center"
        >
          <div className="relative w-[80px] h-[50px]">
            <img
              src="/nav-logo.png"
              className="absolute top-0 left-0 right-0 bottom-0"
              alt="shop logo"
            />
          </div>
        </Link>

        {/* search cart etc */}
        <div className="flex justify-between items-center gap-4">
          <div className="hidden sm:block">
            <Saerch />
          </div>
          <CiUser className="text-3xl cursor-pointer" />
          <div className="flex justify-between items-center cursor-pointer">
            <CiShoppingCart className="text-3xl" />
            <div>
              <Badge variant="outline" className="bg-black text-white text-sm">
                0
              </Badge>
              <p className="text-sm">cart</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
