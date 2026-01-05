import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

 const onSubmit = async (data) => {
  try {
    const userinfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
      number: data.number,
    };

    const res = await axios.post(
      "http://localhost:8000/api/signup",
      userinfo
    );

    localStorage.setItem("user", JSON.stringify(res.data.user));
    toast.success("Successfully created!");

    reset();
    navigate("/"); 

  } catch (error) {
    console.log(error);
    toast.error("Signup Failed");
  }
};  


  return (
    <>
      <Navbar />

      <section className="pt-24 pb-20 bg-base-100">
        <div className="max-w-sm mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Sign Up</h1>
            <p className="text-gray-500">
              Create your account to get started
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card bg-base-200 shadow-md"
          >
            <div className="card-body space-y-4">
              <div>
                <label className="label">Full Name</label>
                <input
                  className="input input-bordered w-full"
                  {...register("fullname", { required: true })}
                />
                {errors.fullname && (
                  <p className="text-error text-sm">Full name is required</p>
                )}
              </div>

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
                <label className="label">Phone Number</label>
                <input
                  type="tel"
                  className="input input-bordered w-full"
                  {...register("number", { required: true })}
                />
                {errors.number && (
                  <p className="text-error text-sm">
                    Phone number is required
                  </p>
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

              <button type="submit" className="btn btn-primary w-full">
                Sign Up
              </button>

              <p className="text-center text-sm">
                Already have an account?{" "}
                <Link to="/login" className="text-primary">
                  Login
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

export default Signup;
