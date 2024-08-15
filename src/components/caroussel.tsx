import React, { useRef } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from "next/image";

export default function SimpleSlider({children}: {children: React.ReactNode}) {
    let sliderRef = useRef<Slider | null>();
    const next = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };
    const previous = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <></>,
    prevArrow: <></>,
    arrows: true,
    responsive: [
        {
            breakpoint: 1500,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
        {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
    ],
    customPaging: (i: any) => (
        <div
          style={{
            width: '8px',
            height: '8px',
            marginTop: "10px",
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            background: "#333333"
          }}
        >
        </div>
      ),
    dotsClass: 'slick-dots custom-dots'  
  };
  return (
    <div className="slider-container">
    <Slider 
        ref={slider => {
          sliderRef.current = slider;
        }} 
        {...settings}
    >
   {children}
    </Slider>
    <div style={{
        display: "flex",
        justifyContent: "center",
    }}>
        <div style={{ textAlign: "center" }} className="w-1/2 flex justify-between my-8 max-sm:hidden">
            <div onClick={previous} className=" w-[40px] h-[40px] flex items-center justify-center rounded-full bg-spacialServices ml-4 z-10 cursor-pointer"><Image src="prev.svg" alt="" width={30} height={30} /></div>
            <div onClick={next} className=" w-[40px] h-[40px] flex items-center justify-center rounded-full bg-spacialServices ml-4 z-10 cursor-pointer"><Image src="chevron.svg" alt="" width={30} height={30} /></div>
        </div>
    </div>
    </div>
  );
}