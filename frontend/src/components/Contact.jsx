// Contact.jsx
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Contact() {
  return (
    <>
      <Navbar />

      <section className="pt-24 pb-20 bg-base-100">
        <div className="max-w-screen-md mx-auto px-4">

         
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-3">Contact Us</h1>
            <p className="text-gray-500">
              Have questions or feedback? We’d love to hear from you.
            </p>
          </div>

          
          <div className="card bg-base-200 shadow-md">
            <div className="card-body space-y-4">

              <div>
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Email Address</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  placeholder="Write your message..."
                  className="textarea textarea-bordered w-full min-h-[120px]"
                  required
                ></textarea>
              </div>

              <button className="btn btn-primary w-full">
                Send Message
              </button>

            </div>
          </div>

          {/* INFO */}
          <div className="mt-12 text-center text-gray-600 space-y-2">
            <p>Email: support@bookstore.com</p>
            <p>Phone: +91 90000 00000</p>
            <p>Location: India</p>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;
