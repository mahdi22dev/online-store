import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Function to get random products from an array
export const getRandomProducts = (array: any[], numProducts: any) => {
  // Make a copy of the array using the spread operator or Array.from()
  const copiedArray = [...array];
  // const copiedArray = Array.from(array);

  // Shuffle the copied array
  const shuffled = copiedArray.sort(() => 0.5 - Math.random());

  // Return a slice of the shuffled array
  return shuffled.slice(0, numProducts);
};
