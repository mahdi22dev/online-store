"use client";
import { addToCartAction } from "@/actions/cart-actions";
import { toggleCartRefetch } from "@/redux/cart/cartSlice";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { devices } from "@/config/devices";

function ProductItem() {
  const [value, setValue] = React.useState("");
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();
  const addToCart = async (productId: string, price: number) => {
    try {
      console.log(value);
      if (!value) {
        toast("Please chose a device for the phone case");
        return;
      }
      addToCartAction(productId, price, value);
      dispatch(toggleCartRefetch());
      toast("Product has been added to your cart", {
        action: {
          label: "View cart",
          onClick: () => router.push("/cart"),
        },
      });
    } catch (error) {
      toast.error("Error adding item to your cart");
    }
  };

  return (
    <div className="h-full rounded-xl border-4 bg-slate-200">
      <div className="h-2/3 w-full p-5">
        <img
          alt="iphone 15 pro case"
          src={`https://images.ctfassets.net/xp3ehvbs6dy6/6OxuBIhxR2ojxHEfri2GyD/978fbd96e31e0f084abf4c526aacb4e9/2024-04-18_20-48-35_2716.png?w=700&h=700&fm=webp&q=80`}
          className="duration-350 h-full w-full object-cover"
        />
      </div>

      <div className="mt-1 flex flex-col items-center gap-3 ">
        <p className="text-md capitalize">iPhone case 15 pro</p>
        <p className="text-sm capitalize ">$12.99</p>
        <DeviceSlector setValue={setValue} value={value} />
        <Button onClick={() => addToCart("3556456", 11)} variant={"default"}>
          add to cart
        </Button>
      </div>
    </div>
  );
}

export default ProductItem;

function DeviceSlector({
  value,
  setValue,
}: {
  setValue: React.Dispatch<React.SetStateAction<string>>;
  value: string;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? devices.find((device) => device.value === value)?.label
            : "Select device..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search device..." className="rounded" />
          <CommandEmpty>No device found.</CommandEmpty>
          <CommandGroup>
            <CommandList data-disabled="true">
              {devices.map((device) => (
                <CommandItem
                  key={device.value}
                  value={device.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === device.value ? "opacity-100" : "opacity-0",
                    )}
                  />
                  {device.label}
                </CommandItem>
              ))}
            </CommandList>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
