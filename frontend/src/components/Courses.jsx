import React from "react";
import axios from "axios"
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";



const truncateTitle = (title, maxLength = 90) =>
  title.length > maxLength ? title.slice(0, maxLength) + "..." : title;

function Courses() {
  
     const [data,setdata]=useState([])
    


  useEffect(()=>{
    const getdata = async() =>{
       const res=await axios.get("http://localhost:8000/book/api")
      setdata(res.data)
    }
    getdata()
  },[])

  const filterdata = data.filter((item) => item.price !== 0);

  return (
    <div className="max-w-screen-xl mx-auto px-4 pt-24 pb-16">
      
      <h1 className="text-3xl font-semibold mb-10 text-center">
        All Paid Courses
      </h1>
        <p className=" m-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, assumenda et suscipit illo sit sequi. Veritatis, velit impedit sit minus repellat quas? Modi excepturi laudantium, molestiae reprehenderit consequatur mollitia reiciendis eius corrupti vel officia ea eos quibusdam nam deleniti neque quod eaque ad a ducimus fugiat, esse ipsum. Maxime, consectetur?  </p>

      <div className="flex justify-center m-12  ">
 
        <button className="px-4 py-2 bg-red-500  rounded-md"><Link to="/">BACK</Link> </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filterdata.map((item) => (
          <div
            key={item.id}
            className="card bg-base-100 shadow-md flex flex-col"
          >
          
            <figure className="h-48 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </figure>

         
            <div className="card-body flex flex-col">
              <h2 className="card-title text-base min-h-[48px]">
                {truncateTitle(item.title)}
              </h2>

              <p className="text-sm text-gray-500">{item.author}</p>

              <p className="text-lg font-semibold text-primary">
                ₹{item.price}
              </p>

            
              <div className="mt-auto">
                <button className="btn btn-primary w-full">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
