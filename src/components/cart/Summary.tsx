"use client";
import React from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { IoBagCheckOutline } from "react-icons/io5";
function Summary() {
  return (
    <div className="bg-white rounded-md w-auto md:w-96 h-64 fixed md:sticky md:top-[10%] bottom-4 left-4 right-4 md:left-auto md:right-auto md:bottom-auto p-5 space-y-3 shadow hover:shadow-md focus:shadow-md transition-all duration-200">
      <h2 className="font-bold text-xl">Summary</h2>
      <div className="flex justify-between items-center gap-5">
        <p>Subtotal</p>
        <p>US $150</p>
      </div>
      <div className="flex justify-between items-center gap-5">
        <p>Shipping fee</p>
        <p>free shipping!</p>
      </div>
      <div className="flex justify-between items-center gap-5">
        <p className="font-bold">Total</p> <p> US $150</p>
      </div>
      <Separator className="my-3" />
      <Button
        variant={"default"}
        className="w-full mt-auto uppercase rounded-xl font-normal flex justify-center items-center gap-1"
      >
        <IoBagCheckOutline className="text-xl" /> Checkout (1)
      </Button>
    </div>
  );
}

export default Summary;
