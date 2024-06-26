"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userAuthRigsterSchema } from "@/lib/validation";
import ClipLoader from "react-spinners/ClipLoader";
import { toast } from "sonner";
import { RegisterFormData } from "@/lib/types";
import { Button } from "../ui/button";
import FormInput from "./FormInput";
import { sentWelcome } from "@/actions/email";

const AuthRegisterForm = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [githubLoading, setGithubLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(userAuthRigsterSchema),
  });

  const onSubmit = async (data: {
    email: string;
    name: string;
    password: string;
    confirm_password: string;
  }) => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ data }),
      });
      const responseJson = await res.json();
      if (res.status == 400) {
        toast.error(responseJson?.message);
      } else if (res.status == 200) {
        toast.success("new user registred successfully");
        await sentWelcome({
          fullName: responseJson.newUser.name,
          email: responseJson.newUser.email,
        });
        setTimeout(() => {
          window.location.href = "/login";
        }, 500);
      } else if (res.status == 409) {
        toast.error(responseJson?.message);
      } else {
        setIsLoading(false);
        toast.error("something wrong happend please try again later");
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        text={"Name"}
        type={"text"}
        placeholder={"Full Name"}
        register={{ ...register("name") }}
        disabled={isLoading || githubLoading}
      />
      {errors?.name && (
        <p className="px-1 text-xs text-red-600">{errors.name.message}</p>
      )}
      <FormInput
        text={"Email"}
        type={"email"}
        placeholder={"Email"}
        register={{ ...register("email") }}
        disabled={isLoading || githubLoading}
      />
      {errors?.email && (
        <p className="px-1 text-xs text-red-600">{errors.email.message}</p>
      )}
      <FormInput
        text={"Password"}
        type={"password"}
        placeholder={"Password"}
        register={{ ...register("password") }}
        disabled={isLoading || githubLoading}
      />
      {errors?.password && (
        <p className="px-1 text-xs text-red-600">{errors.password.message}</p>
      )}
      <FormInput
        text={"Confirm Password"}
        type={"password"}
        placeholder={"Confirm Password"}
        register={{ ...register("confirm_password") }}
        disabled={isLoading || githubLoading}
      />
      {errors?.confirm_password && (
        <p className="px-1 text-xs text-red-600">
          {errors.confirm_password.message}
        </p>
      )}

      <Button
        variant="default"
        className="flex gap-2"
        type="submit"
        disabled={isLoading || githubLoading}
      >
        <ClipLoader
          size={20}
          aria-label="Loading Spinner"
          data-testid="loader"
          loading={isLoading}
          color="#fff"
        />
        Sign Up
      </Button>
    </form>
  );
};

export default AuthRegisterForm;
