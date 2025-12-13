"use client";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaBurger,
  FaChair,
  FaFaceSmile,
  FaAward,
  FaGlobe,
  FaUser,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa6";
import heroSteakImage from "@/assets/images/hero-steak-image.jpg";
import bottomLeftStar from "@/assets/images/bottom-left-star-with-border.png";
import topRightStar from "@/assets/images/top-right-star-with-border.png";
import heroTopLeftImage from "@/assets/images/hero-top-left-image.jpg";
import heroBottomRightImage from "@/assets/images/hero-bottom-right-image.jpg";

const slideItems = [
  {
    icon: <FaBurger />,
    text: "Discover Our Menu Today",
  },
  {
    icon: <FaChair />,
    text: "Reserve Your Seat Now",
  },
  {
    icon: <FaFaceSmile />,
    text: "Plan Your Celebration Event",
  },
  {
    icon: <FaAward />,
    text: "Our Signature Dishes Today",
  },
  {
    icon: <FaGlobe />,
    text: "Order Online Easily",
  },
  {
    icon: <FaBurger />,
    text: "Visit Our Restaurant Today",
  },
  {
    icon: <FaUser />,
    text: "Exclusive Chef Specials",
  },
  {
    icon: <FaBurger />,
    text: "Join Our Program Today",
  },
  {
    icon: <FaFaceSmile />,
    text: "Plan Your Celebration Party",
  },
];

const Hero = () => {
  return (
    <section
      className="bg-gradient-tl space-y-24 md:space-y-30 xl:space-y-44"
      id="d2c_hero"
    >
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">
          <div
            className="space-y-4 text-center md:text-left"
            data-aos="fade-up"
          >
            <h1 className="d2c_title text-5xl md:text-[55px] lg:text-7xl xl:text-8xl 2xl:text-[120px] leading-[1.2] md:leading-[1.1] before:hidden md:before:block">
              Delicious <span className="pl-0 md:pl-10">Moments</span> Await
            </h1>
            <Link
              href="https://wa.me/8882246241?text=Hi%20I%20want%20to%20know%20about%20franchise"
              target="_blank"
              rel="noopener noreferrer"
              className="d2c_btn"
            >
              {" "}
              Become a Franchise Partner{" "}
            </Link>
            <div className="lg:flex items-center gap-6 2xl:gap-10">
              <p className="text-lg font-secondary capitalize mb-4 lg:mb-0">
                follow our official pages
              </p>
              <div className="d2c_social_link space-x-2">
                <Link href="#">
                  <FaFacebookF />
                </Link>
                <Link
                  href="https://wa.me/8882246241?text=Hi%20I%20want%20to%20know%20about%20franchise"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp />
                </Link>
                <Link href="#">
                  <FaInstagram />
                </Link>
              </div>
            </div>
          </div>

          <div
            className="relative h-[350px] xl:h-[470px] mx-2 md:mx-0"
            data-aos="fade-up"
          >
            <Image
              src={heroSteakImage.src}
              width={heroSteakImage.width}
              height={heroSteakImage.height}
              className="w-full h-full object-cover rounded-lg z-10 relative"
              alt="Steak Image"
            />
            <Image
              src={bottomLeftStar.src}
              width={bottomLeftStar.width}
              height={bottomLeftStar.height}
              className="absolute -bottom-6 -left-6 z-0"
              alt="Star With border"
            />
            <Image
              src={topRightStar.src}
              width={topRightStar.width}
              height={topRightStar.height}
              className="absolute -right-6 -top-6 z-0"
              alt="Star With border"
            />

            <div className="p-2 w-[100px] h-[100px] md:w-[140px] md:h-[140px] absolute top-0 md:-top-6 md:-left-6 z-20 border rounded border-dashed border-secondary">
              <Image
                src={heroTopLeftImage.src}
                width={heroTopLeftImage.width}
                height={heroTopLeftImage.height}
                className="w-full h-full object-cover"
                alt="Hero Food Image"
              />
            </div>

            <div className="p-2 w-[100px] h-[100px] md:w-[140px] md:h-[140px] absolute bottom-0 md:-bottom-6 right-0 md:-right-6 z-20 border rounded border-dashed border-secondary">
              <Image
                src={heroBottomRightImage.src}
                width={heroBottomRightImage.width}
                height={heroBottomRightImage.height}
                className="w-full h-full object-cover"
                alt="Hero Food Image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="d2c_infinite flex items-center" data-aos="fade-up">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={"auto"}
          loop={true}
          speed={7000}
          autoplay={{
            delay: 0,
          }}
          spaceBetween={24}
        >
          {slideItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center">
                <p>{item.icon}</p>
                <p>{item.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
