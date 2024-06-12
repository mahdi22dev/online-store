import * as z from "zod";

export const userAuthLoginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Invalid email address"),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export const userAuthRigsterSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: "Full name must be at least 3 characters" })
      .regex(/^[a-zA-Z\s'-]+$/, {
        message:
          "Name should only contain letters, spaces, hyphens, and apostrophes",
      }),
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
    confirm_password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
  })
  .refine((data) => data.password === data.confirm_password, {
    path: ["confirm_password"],
    message: "Passwords do not match",
  });
