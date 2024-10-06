"use client";
import Image from "next/image";
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
// import Slider from "react-slick";
import { useEffect, useRef } from "react";
import ProjectCarousel from "@/components/ProjectCarousel";

export default function Work() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };

    return (
        <section className=" py-24">
          
       <ProjectCarousel/>
        </section>
    );
}
