import * as z from "zod";
import { userAuthRigsterSchema, userAuthLoginSchema } from "./validation";
import { ProductItem, Orders, User } from "@prisma/client";

export type LogInFormData = z.infer<typeof userAuthLoginSchema>;
export type RegisterFormData = z.infer<typeof userAuthRigsterSchema>;
export type UserServerSession = {
  user: {
    id: string;
    name: string;
    username: string;
    email: string;
    image: string;
  };
} | null;

export type cartType =
  | ({
      ProductItems: {
        id: string;
        productId: string;
        quantity: number;
        CartId: string;
        price: number;
        device: string;
      }[];
    } & {
      id: string;
      userId: string | null;
    })
  | null;

export type ProductICartitemstype = {
  id: string;
  productId: string;
  quantity: number;
  CartId: string | null;
  device: string | null;
  price: number;
};

export type OrderType = Orders & {
  user: User;
  ProductItems: ProductItem[];
};
