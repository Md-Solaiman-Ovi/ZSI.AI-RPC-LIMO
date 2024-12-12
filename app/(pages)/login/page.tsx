/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/userSlice"; // Adjust the path based on your project structure
import Image from "next/image";
import LoginImg1 from "@/public/login-bg.jpg";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState({ email: "", password: "" });
  const [generalError, setGeneralError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const validateForm = () => {
    let isValid = true;
    const errors = { email: "", password: "" };

    if (!email) {
      errors.email = "Email is required.";
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      errors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (!password) {
      errors.password = "Password is required.";
      isValid = false;
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters.";
      isValid = false;
    }

    setFormError(errors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGeneralError("");

    if (!validateForm()) return;

    setLoading(true);

    const apiUrl = "https://api.zsimarketing.com/api/auth/user/login";

    try {
      const response = await axios.post(apiUrl, {
        email,
        password,
      });

      const { token, user } = response.data.data;
      console.log("token:", token, "user:", user);

      if (token && user) {
        dispatch(setUser({ token, user }));
        router.push("/welcome");
      } else {
        setGeneralError("Login failed. Please try again.");
      }
    } catch (err: any) {
      setGeneralError(
        err.response?.data?.error || "An unexpected error occurred.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="my-12 flex flex-col justify-center bg-white md:flex-row">
      <div className="flex h-full w-full items-center md:w-3/5">
        <Image src={LoginImg1} alt={""} />
      </div>
      <div className="w-full px-4 md:mt-20 md:w-2/5 lg:pl-16 lg:pr-40">
        <h2 className="my-10 text-2xl text-[30px] font-bold">Sign In</h2>
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className={`mt-1 block w-full rounded border p-4 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
                formError.email ? "border-red-500" : ""
              }`}
            />
            {formError.email && (
              <p className="mt-1 text-sm text-red-500">{formError.email}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className={`mt-1 block w-full rounded border p-4 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
                formError.password ? "border-red-500" : ""
              }`}
            />
            {formError.password && (
              <p className="mt-1 text-sm text-red-500">{formError.password}</p>
            )}
          </div>
          {generalError && (
            <p className="text-sm text-red-500" aria-live="polite">
              {generalError}
            </p>
          )}
          <div className="flex items-center justify-between md:items-start">
            <button
              type="submit"
              disabled={loading}
              className="rounded bg-[rgba(218,145,0,1)] p-3 font-semibold text-white shadow transition hover:bg-black disabled:opacity-50"
            >
              {loading ? "Logging in..." : "SUBMIT"}
            </button>
            <p className="cursor-pointer text-sm font-medium text-blue-500">
              Forget password
            </p>
          </div>
        </form>
        <div className="mt-4 flex items-center gap-2">
          <p>Need an account?</p>
          <p className="cursor-pointer text-blue-500">Sign Up</p> |
          <p className="cursor-pointer text-blue-500">Privacy Policies</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
