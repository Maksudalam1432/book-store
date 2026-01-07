import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../context/Authprovider";
function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
const [,setAuthUser]=useAuth()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const userinfo = {
        email: data.email,
        password: data.password,
      };

      const res = await axios.post(
        "http://localhost:8000/api/login",
        userinfo
      );

      localStorage.setItem("user", JSON.stringify(res.data.user));
         setAuthUser(res.data.user);
      toast.success("Login Successfully");

      reset();
      navigate("/"); 

    } catch (error) {
      toast.error("Invalid user");
    }
  };

  return (
    <>
      <Navbar />

      <section className="pt-24 pb-20 bg-base-100">
        <div className="max-w-sm mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Login</h1>
            <p className="text-gray-500">
              Welcome back! Please login to your account
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card bg-base-200 shadow-md"
          >
            <div className="card-body space-y-4">
              <div>
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input input-bordered w-full"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p className="text-error text-sm">Email is required</p>
                )}
              </div>

              <div>
                <label className="label">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="input input-bordered w-full pr-10"
                    {...register("password", { required: true, minLength: 6 })}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-sm"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-error text-sm">
                    Password is required
                  </p>
                )}
              </div>

              <button type="submit" className="btn bg-green-400 w-full">
                Login
              </button>

              <p className="text-center text-sm">
                Don’t have an account?{" "}
                <Link to="/signup" className="text-primary">
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Login;
