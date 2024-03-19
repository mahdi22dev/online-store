"use client";

import React from "react";
import { Label } from "../ui/label";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { CiUser } from "react-icons/ci";
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  text: string;
  type: any;
  register: any;
  placeholder: string;
  disabled: boolean;
}

export default function FormInput({
  text,
  type,
  placeholder,
  register,
  disabled,
  className,
  ...props
}: InputProps): JSX.Element {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5 relative">
      <Label htmlFor={type}>{text}</Label>
      <Input
        className={cn(
          "h-10 w-[300px] pl-7 bg-whiteplaceholder:text-black placeholder:text-opacity-50",
          className
        )}
        id={type}
        placeholder={placeholder}
        type={type}
        autoCapitalize="none"
        autoCorrect="off"
        disabled={disabled}
        {...register}
        {...props}
      />

      <div className="absolute top-8 left-2">
        {type == "password" ? (
          <RiLockPasswordLine />
        ) : type == "email" ? (
          <MdOutlineEmail />
        ) : (
          <CiUser />
        )}
      </div>
    </div>
  );
}
