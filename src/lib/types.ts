import * as z from "zod";
import {
  userAuthRigsterSchema,
  userAuthLoginSchema,
  resourceFormSchema,
} from "./validation";

export type LogInFormData = z.infer<typeof userAuthLoginSchema>;
export type RegisterFormData = z.infer<typeof userAuthRigsterSchema>;
export type ResourceFormData = z.infer<typeof resourceFormSchema>;
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
      }[];
    } & {
      id: string;
      userId: string | null;
    })
  | null;

export type ProductItems = {
  id: string;
  productId: string;
  quantity: number;
  CartId: string;
};
