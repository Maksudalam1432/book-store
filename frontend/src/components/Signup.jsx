import React from "react";
import { useForm } from "react-hook-form";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Signup Data:", data);
  };

  return (
    <>
      <Navbar />

      <section className="pt-24 pb-20 bg-base-100">
        <div className="max-w-sm mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Sign Up</h1>
            <p className="text-gray-500">Create your account to get started</p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card bg-base-200 shadow-md"
          >
            <div className="card-body space-y-4">
              <div>
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="input input-bordered w-full"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="text-error text-sm">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <p className="text-error text-sm">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="input input-bordered w-full"
                  {...register("phone", { required: "Phone number is required" })}
                />
                {errors.phone && (
                  <p className="text-error text-sm">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Create a password"
                  className="input input-bordered w-full"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Minimum 6 characters",
                    },
                  })}
                />
                {errors.password && (
                  <p className="text-error text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <button type="submit" className="btn btn-primary w-full">
                Sign Up
              </button>

              <div className="text-center text-sm text-gray-500">
                <p>
                  Already have an account?{" "}
                  <Link to="/login" className="text-primary">
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Signup;
