import React from "react";

function Footer() {
  return (
    <footer className="grid grid-cols-2 bg-black bg-opacity-90 p-5  pt-14 text-white lg:grid-cols-3 xl:grid-cols-4">
      <Support />
      <Support />
      <Support />
      <Support />
    </footer>
  );
}

export default Footer;

const Support = () => {
  return (
    <div>
      <p className="text-base">SUPPORT</p>
      <p className="text-xl">Contact us via:</p>
      <p className="text-xl">Privacy Policy</p>
    </div>
  );
};
