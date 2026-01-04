import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function About() {
  return (
    <>
      <Navbar />

      <section className="pt-24 pb-20 bg-base-100">
        <div className="max-w-screen-xl mx-auto px-4">

          {/* HERO */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-primary">Book Store</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              A modern learning platform built to make education simple,
              affordable, and accessible for everyone.
            </p>
          </div>

          {/* GRID SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* LEFT CONTENT */}
            <div>
              <h2 className="text-3xl font-semibold mb-4">
                Learn. Grow. Succeed.
              </h2>

              <p className="text-lg text-gray-600 mb-4">
                <strong>Book Store</strong> is a digital platform designed for
                students, developers, and lifelong learners who want to build
                real-world skills. We provide carefully curated books and courses
                that focus on practical knowledge rather than just theory.
              </p>

              <p className="text-lg text-gray-600">
                From beginner-friendly resources to advanced professional
                content, our goal is to support learners at every stage of their
                journey.
              </p>
            </div>

            {/* RIGHT HIGHLIGHTS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              <div className="p-6 rounded-xl shadow-sm bg-base-200">
                <h3 className="text-xl font-semibold mb-2">📚 Free Resources</h3>
                <p className="text-gray-600">
                  High-quality free books to help beginners start learning
                  without barriers.
                </p>
              </div>

              <div className="p-6 rounded-xl shadow-sm bg-base-200">
                <h3 className="text-xl font-semibold mb-2">💻 Paid Courses</h3>
                <p className="text-gray-600">
                  Structured premium courses focused on industry-ready skills.
                </p>
              </div>

              <div className="p-6 rounded-xl shadow-sm bg-base-200">
                <h3 className="text-xl font-semibold mb-2">🎯 Career Focused</h3>
                <p className="text-gray-600">
                  Learn skills that actually matter in real-world jobs.
                </p>
              </div>

              <div className="p-6 rounded-xl shadow-sm bg-base-200">
                <h3 className="text-xl font-semibold mb-2">🌙 User Friendly</h3>
                <p className="text-gray-600">
                  Clean UI with light & dark mode for a better reading
                  experience.
                </p>
              </div>

            </div>
          </div>

          {/* MISSION */}
          <div className="mt-20 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600">
              Our mission is to empower learners by providing easy-to-understand,
              affordable, and practical educational resources. We believe
              education should be accessible to everyone, regardless of their
              background.
            </p>
          </div>

          {/* FOOTER TEXT */}
          <div className="mt-16 text-center">
            <p className="text-gray-500">
              Built with ❤️ for learners who want to grow every day.
            </p>
          </div>

        </div>
      </section>
      <Footer/>
    </>
  );
}

export default About;
