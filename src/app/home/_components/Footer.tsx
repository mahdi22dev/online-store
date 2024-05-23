import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="grid grid-cols-2 bg-black bg-opacity-90 p-10 px-14  pt-14 text-white lg:grid-cols-3 xl:grid-cols-4">
      <Shop />
      <Support />
      {/* <Support />
      <Support /> */}
    </footer>
  );
}

export default Footer;

const Support = () => {
  return (
    <div className="flex flex-col gap-2 ">
      <p className="text-base">SUPPORT</p>
      <p className="footer_text">Contact us via:</p>
      <Link href={"/info/privacy"} className="footer_text">
        Privacy Policy
      </Link>
    </div>
  );
};

const Shop = () => {
  return (
    <div className="flex flex-col gap-2">
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
