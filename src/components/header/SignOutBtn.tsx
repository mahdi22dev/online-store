"use client";
import { DropdownMenuItem } from "../ui/dropdown-menu";
import { signOut } from "next-auth/react";

function SignOutBtn() {
  return (
    <DropdownMenuItem onClick={async () => await signOut()}>
      Log out
    </DropdownMenuItem>
  );
}

export default SignOutBtn;
