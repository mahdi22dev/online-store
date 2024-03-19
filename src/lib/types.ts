import * as z from "zod";
import {
  userAuthRigsterSchema,
  userAuthLoginSchema,
  resourceFormSchema,
} from "./validation";

export type LogInFormData = z.infer<typeof userAuthLoginSchema>;
export type RegisterFormData = z.infer<typeof userAuthRigsterSchema>;
export type ResourceFormData = z.infer<typeof resourceFormSchema>;
