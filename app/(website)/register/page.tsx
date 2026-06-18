"use client";

import { useState } from "react";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { useRouter } from "next/navigation";

import { registerSchema, RegisterFormData } from "@/validations/auth";

import { getAuthErrorMessage, registerUser } from "@/services/auth.service";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

export default function RegisterPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      setLoading(true);
      setErrorMessage("");

      await registerUser(data);

      router.push("/login");
    } catch (error) {
      setErrorMessage(getAuthErrorMessage(error, "Registration failed"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md rounded-xl border bg-white p-8 shadow-lg">
        <h1 className="mb-2 text-center text-3xl font-bold">Create Account</h1>

        <p className="mb-6 text-center text-gray-500">Register to continue</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Input placeholder="Full Name" {...register("name")} />

            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div>
            <Input placeholder="Email" {...register("email")} />

            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <Input
              type="password"
              placeholder="Password"
              {...register("password")}
            />

            {errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Creating Account..." : "Register"}
          </Button>

          {errorMessage && (
            <p className="text-sm text-red-600" role="alert" aria-live="polite">
              {errorMessage}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
