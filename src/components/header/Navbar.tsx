import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import Saerch from "./Saerch";
import Link from "next/link";
import ResponsiveNav from "./ResponsiveNav";
import NavLinks from "./NavLinks";
import { getCartLength } from "@/actions/cart-actions";
import CartTotal from "../cart/CartTotal";

async function Navbar(): Promise<JSX.Element> {
  const cartLength: number = await getCartLength();
  return (
    <>
      <nav className="w-full h-[75px] shadow-lg font-medium bg-white sticky top-0 z-50">
        <div className="w-full max-w-5xl flex justify-between items-center mx-auto mt-3 px-3">
          {/* links */}
          <div className="flex sm:hidden justify-between items-center">
            <ResponsiveNav /> <Saerch />
          </div>
          <NavLinks className="hidden sm:flex" />

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
            <Link href={"/login"}>
              <CiUser className="text-3xl cursor-pointer" />
            </Link>
            <Link
              href={"/cart"}
              className="flex justify-between items-center cursor-pointer"
            >
              <CiShoppingCart className="text-3xl" />
              <CartTotal cartLength={cartLength} />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
