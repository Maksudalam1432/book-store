import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios"
import { useState,useEffect } from "react";



function Freebook() {
    const [data,setdata]=useState([])

  useEffect(()=>{
    const getdata = async() =>{
       const res=await axios.get("http://localhost:8000/book/api")
    setdata(res.data)
    // console.log(res.data)
    }
    getdata()
  },[])
  const filterdata = data.filter((item) => item.price === 0);
  console.log(filterdata)

  const settings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,      
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 mt-20 mb-20">
      <h1 className="text-2xl font-semibold mb-6">Free Offer Book</h1>

      <Slider {...settings}>
        {filterdata.map((item) => (
          <div key={item.id} className="px-3 h-full">
            <div className="card bg-base-100 shadow-sm h-full flex flex-col">

   
              <figure className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </figure>

              <div className="card-body flex flex-col">
                <h2 className="card-title text-base min-h-[48px]">
                  {item.title}
                </h2>

                <p className="text-sm text-gray-500">{item.author}</p>

                <p className="text-lg font-semibold text-green-600">
                  Free
                </p>
           
                <div className="mt-auto">
                  <button  className="btn bg-gray-400 w-full">
                    FREE
                  </button>
                </div>
              </div>

            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Freebook;
