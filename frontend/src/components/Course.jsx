import React from "react";
import Courses from "./Courses";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/Authprovider";


function Course() {
  const [authUser,setAuthUser ] = useAuth();
console.log(authUser)
  if (!authUser) {
    return <Navigate to="/signup" />;
  }

  return (
    <>
      <Navbar />
      <Courses />
      <Footer />
    </>
  );
}

export default Course;
