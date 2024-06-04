import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <footer className="grid grid-cols-1 gap-8 bg-black bg-opacity-90 p-10 px-[10%] pt-14 text-white lg:grid-cols-2 lg:gap-3 xl:grid-cols-3">
      <Shop />
      <Support />
      <NewsLetter />
    </footer>
  );
}

export default Footer;

const Support = () => {
  return (
    <div className="mt-4 flex flex-col gap-2 ">
      <p className="text-base">SUPPORT</p>
      <p className="text-base">Email : idrissimahdi2020@gmail.com</p>
      <p className="text-base">Phone : 212666778899</p>
      <p className="text-base">
        address : 1234 Elm St, Apt 5B, Springfield, IL 62704, USA
      </p>
      <Link href={"/info/privacy"} className="footer_text">
        Privacy Policy
      </Link>
    </div>
  );
};

const Shop = () => {
  return (
    <div className="mt-4 flex flex-col gap-2">
      <p className="text-base">SHOP</p>
      <Link href={"/info/shipping"} className="footer_text">
        Shipping
      </Link>
      <Link href={"/refund"} className="footer_text">
        Returns & Refunds
      </Link>
      <Link href={"/info/payment"} className="footer_text">
        Payment
      </Link>
      <Link href={"/info/FAQ"} className="footer_text">
        FAQ
      </Link>
    </div>
  );
};

const NewsLetter = () => {
  return (
    <div className="mt-4 flex flex-col gap-2">
      <p className="text-base">NEWSLETTER</p>
      <p>Join our newsletter to get fresh deals.</p>
      <div className="mt-3 flex gap-4">
        <Input
          className="max-w-xs bg-inherit"
          type="email"
          placeholder="Your Email"
        />
        <Button className="text-black" variant={"outline"}>
          Subscribe
        </Button>
      </div>
      <div className="mt-3 flex gap-6">
        <Link href={"/"}>
          <FaFacebookF className="text-3xl transition-opacity duration-300 hover:opacity-60" />
        </Link>{" "}
        <Link href={"/"}>
          <FaInstagram className="text-3xl transition-opacity duration-300 hover:opacity-60" />
        </Link>{" "}
        <Link href={"/"}>
          <FaLinkedin className="text-3xl transition-opacity duration-300 hover:opacity-60" />
        </Link>
      </div>
    </div>
  );
};
