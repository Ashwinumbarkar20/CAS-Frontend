import React from "react";
import "./ProductCarousal.css";
import ProductsData from "../../Data/Products.json";
import Slider from "react-slick";
import ProductCard from "../ProductCard";

export default function ProductCarousal() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
   
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    
  };

  return (
    <>
    <h2 id="Productheading">Our Products</h2>
    <div
      className="slider-container "
      
    >
      <Slider {...settings}>
        {ProductsData?.map((Product, i) => (
          <div key={i} className="slide-item">
            <ProductCard
              Product_Name={Product.Product_Name}
              Product_image={Product.Product_Hero_Image}
              Product_Heading={Product.Heading}
              page_url={Product.page_url}
            />
          </div>
        ))}
      </Slider>
    </div>
    </>
  );
}
