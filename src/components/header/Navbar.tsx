import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { Badge } from "../ui/badge";
import { CiUser } from "react-icons/ci";
import Saerch from "./Saerch";
import Link from "next/link";
function Navbar() {
  return (
    <nav className="w-full fixed top-0 h-[75px] shadow-lg font-medium">
      <div className="w-full max-w-5xl flex justify-between items-center mx-auto mt-3">
        <div className="flex gap-2 justify-between items-center capitalize">
          <Link href={"/home"}>home</Link>
          <Link href={"/products"}>products</Link>
          <Link href={"/devices"}>devices</Link>
        </div>
        <div className="flex justify-between items-center gap-4">
          <Saerch />
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
