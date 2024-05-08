import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { CiUser } from "react-icons/ci";
import SignOutBtn from "./SignOutBtn";

export function Usermenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <CiUser className="cursor-pointer text-3xl" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href={"/orders"}>Orders</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/settings"}>Settings</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <SignOutBtn />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
