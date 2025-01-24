"use client";
import React, { useEffect } from "react";
import Card from "@/_components/molecules/login-card";
import Input from "@/_components/atoms/Input";
import Button from "@/_components/atoms/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginType } from "@/_libs/types";
import { useAuth } from "@/_hooks/useAuth";
import { useRouter } from "next/navigation";
import MyLoading from "@/_components/atoms/my-loading";

const Auth: React.FC = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>();

  const { login, isAuthenticated, setUser } = useAuth();

  const onSubmit: SubmitHandler<LoginType> = (data) => {
    if (data.username === "admin" && data.password === "admin") {
      localStorage.setItem(
        "auth",
        JSON.stringify({
          user: { username: data.username, authorized: true },
          isAuthenticated: true,
        })
      );
      setUser({ username: data.username, authorized: true });
      login();
      router.push("/");
    } else {
      alert("Username atau Password salah");
    }
  };

  if (isAuthenticated) {
    return <MyLoading message="Checking Authentication..." />;
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex justify-center items-center h-screen max-w-full"
    >
      <Card>
        {/* brand */}
        <div className="w-1/2 flex flex-col justify-center items-center border-r p-8">
          <div className="flex w-full justify-center items-center">
            <h1 className="text-2xl text-white font-semibold">Welcome To</h1>
          </div>
          <div className="flex w-full justify-center items-center">
            <h1 className="text-2xl text-white font-semibold">Pokemon</h1>
          </div>
          <div className="flex w-full justify-center items-center">
            <h1 className="text-2xl text-white font-semibold">Awesome</h1>
            <span className="text-sml">✨</span>
          </div>
        </div>

        {/* form-input */}
        <div className="w-1/2 flex flex-col justify-between p-8">
          <Input
            label="Username"
            {...register("username", { required: "Username is required" })}
            required={true}
            error={!!errors.username?.message}
            errorMessage={errors.username?.message}
          />
          <Input
            label="Password"
            type="password"
            {...register("password", { required: "Password is required" })}
            required={true}
            error={!!errors.password?.message}
            errorMessage={errors.password?.message}
          />
          <Button bg="bg-transparent" label="Login" />
        </div>
      </Card>
    </form>
  );
};

export default Auth;
