import React from "react";
import { CiShoppingCart, CiUser } from "react-icons/ci";
import Saerch from "./Saerch";
import Link from "next/link";
import ResponsiveNav from "./ResponsiveNav";
import NavLinks from "./NavLinks";
import { getCartLength } from "@/actions/cart-actions";
import CartTotal from "../cart/CartTotal";
import { Usermenu } from "./UserMenue";
import { getServerSession } from "next-auth";
import { authOptions } from "@/services/auth/auth.service";
import { UserServerSession } from "@/lib/types";
import { Button } from "../ui/button";
import { isUserAdmin } from "@/actions/admin-actions";
async function Navbar(): Promise<JSX.Element> {
  const isAdmin = await isUserAdmin();
  const cartLength: number = await getCartLength();
  const session: UserServerSession = await getServerSession(authOptions);

  return (
    <>
      <div className="flex items-center justify-center gap-5 bg-black p-3 text-center text-white">
        <p>
          FREE SHIPPING <span className=" text-yellow-500">!</span>
        </p>{" "}
        <p> U.S. ORDERS $30+</p>
      </div>
      <nav className="sticky top-0 z-50 h-[75px] w-full bg-white font-medium shadow-lg">
        <div className="mx-auto mt-3 flex w-full max-w-5xl items-center justify-between px-3">
          {/* links */}
          <div className="flex items-center justify-between sm:hidden">
            <ResponsiveNav /> <Saerch />
            {isAdmin == "ADMIN" && (
              <Button asChild variant={"default"}>
                <Link href={"/admin"}>admin dashboard</Link>
              </Button>
            )}
          </div>
          <NavLinks className="hidden sm:flex" />

          {/* logo */}
          <Link
            href={"/"}
            className="flex flex-col items-center justify-center space-y-2 text-center"
          >
            <div className="relative h-[50px] w-[80px]">
              <img
                src="/nav-logo.png"
                className="absolute bottom-0 left-0 right-0 top-0"
                alt="shop logo"
              />
            </div>
          </Link>

          {/* search cart etc */}
          <div className="flex items-center justify-between gap-4">
            <div className="hidden sm:block">
              {isAdmin == "ADMIN" && (
                <Button asChild variant={"default"}>
                  <Link href={"/admin"}>admin dashboard</Link>
                </Button>
              )}
            </div>

            <div className="hidden sm:block">
              <Saerch />
            </div>

            {session ? (
              <Usermenu />
            ) : (
              <Link href={"/login"}>
                <CiUser className="cursor-pointer text-3xl" />
              </Link>
            )}

            <Link
              href={"/cart"}
              className="flex cursor-pointer items-center justify-between"
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
