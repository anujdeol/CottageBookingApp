"use client";
import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/login", {
        email,
        password,
      });

      console.log(response.data);
      setError("");

      window.location.href = "/dashboard";
    } catch (error) {
      setError("Incorrect email or password.");
    }
  };

  return (
    <>
      <p className="text-white font-extrabold tracking-tight font-mono text-2xl text-center mt-24">
        Login to your account
      </p>
      <div className="bg-gray-900 w-1/3 p-16 mt-16 mx-auto rounded-md">
        {error && <p className="text-red-600 text-center">{error}</p>}
        <form className="text-center" onSubmit={handleSubmit}>
          <div className="mx-auto max-w-xs">
            <div className="flex flex-col items-start mb-6">
              <label className="text-white text-bold font-mono text-base mb-4">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Your registered email..."
                className="w-full bg-gray-700 rounded-sm ring-1 ring-gray-500 h-10 text-white p-4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col items-start mb-6">
              <label className="text-white text-bold font-mono text-base mb-4">
                Password
              </label>
              <input
                type="password"
                placeholder="Your password..."
                className="w-full bg-gray-700 rounded-sm ring-1 ring-gray-500 h-10 text-white p-4 mb-4"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-900 text-white font-mono text-base font-semibold w-72 p-2 rounded-sm hover:bg-blue-700"
            >
              LOGIN
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
