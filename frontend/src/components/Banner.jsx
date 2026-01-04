import React from "react";
import md from "./image/md.jpg";

function Banner() {
  return (
    <div className="flex flex-col lg:flex-row max-w-screen-xl mx-auto px-4 mt-28 gap-10">

      {/* LEFT SIDE */}
      <div className="w-full lg:w-1/2">
        <h1 className="text-3xl md:text-5xl font-semibold">
          Hello, welcomes here to learn something{" "}
          <span className="text-pink-400">new everyday!!!</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          autem expedita culpa sed reiciendis delectus saepe voluptatum ducimus
          necessitatibus, harum aperiam repellat maxime recusandae error
          laboriosam molestiae accusantium facere dolorem expedita illum nobis,
          dicta in necessitatibus optio vero numquam incidunt consequatur at a
          laboriosam maxime?
        </p>

        <label className="input validator mt-8 w-full md:w-2/3">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </g>
          </svg>
          <input type="email" placeholder="mail@site.com" required />
        </label>

        <button className="btn btn-secondary mt-8 ml-4">
          Secondary
        </button>
      </div>

   
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={md}
         
          className="w-full md:w-[80%] rounded-md object-contain"
        />
      </div>

    </div>
  );
}

export default Banner;
