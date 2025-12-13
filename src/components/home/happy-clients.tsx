'use client'
import React from 'react';
import Image from 'next/image';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import TestimonialFood from '@/assets/images/testimonial-food-image.jpg';
import TopLeftBorder from '@/assets/images/top-left-star-with-border.png';
import BottomRightBorder from '@/assets/images/bottom-right-star-with-border.png';
import ClientImage1 from '@/assets/images/client-image-1.jpg';
import ClientImage2 from '@/assets/images/client-image-2.jpg';

const happyClientsData = [
    {
        image: ClientImage1,
        clientName: 'Santiago Valentíne',
        clientDesignation: 'Content Manager',
        clientReview: 'The only moment, the only life we have is in the Now. What happened a few moments or several years ago is gone, what will happen this evening, or next month when we going on the best of all holidays is not here yet.'
    },
    {
        image: ClientImage2,
        clientName: 'Isabella Carter',
        clientDesignation: 'Marketing Specialist',
        clientReview: 'Success comes from consistency and passion. Every step forward, no matter how small, is progress. Keep learning, keep growing, and embrace the journey with confidence.'
    }
]

const HappyClients = () => {
    return (
        <section className="bg-gradient-tl" id="d2c_testimonial">
            <div className="container">
                <div className="d2c_section_header">
                    <h2 className="d2c_title" data-aos="fade-up">
                        Happy <span>clients</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-4 md:gap-10 xl:gap-20 items-center" data-aos="fade-up">
                    <div className="relative h-[400px] lg:h-[500px] xl:h-[570px] mb-10 md:mb-0 mx-2 md:mx-0">
                        <Image
                            src={TestimonialFood}
                            alt="Testimonial Food Image"
                            className="w-full h-full object-cover rounded-lg z-10 relative"
                            fill
                            priority
                            sizes="(min-width: 768px) 50vw, 100vw"
                        />
                        <Image
                            src={TopLeftBorder}
                            alt="Star With border"
                            className="absolute -top-6 -left-6 z-0"
                        />
                        <Image
                            src={BottomRightBorder}
                            alt="Star With border"
                            className="absolute -right-6 -bottom-6 z-0"
                        />
                    </div>

                    <div className="d2c_testimonial_slider py-6 md:!py-16 relative w-full overflow-hidden">
                        <Swiper
                            modules={[Autoplay, Navigation]}
                            slidesPerView={1}
                            centeredSlides={true}
                            loop={true}
                            speed={1000}
                            autoplay={{
                                delay: 3000,
                            }}
                            spaceBetween={20}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }}
                            grabCursor={true}
                            allowTouchMove={true}
                        >
                            {
                                happyClientsData.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="swiper-slide">
                                            <div className="space-y-10">
                                                <div className="space-y-2">
                                                    <div className="border border-dashed border-secondary rounded max-w-max p-2">
                                                        <Image
                                                            src={item.image}
                                                            alt="Client Image"
                                                            width={68}
                                                            height={68}
                                                            className="rounded w-[68px] h-[68px] object-cover"
                                                        />
                                                    </div>
                                                    <h5 className="text-2xl-1 text-accent capitalize">
                                                        {item.clientName}
                                                    </h5>
                                                    <p className="capitalize">{item.clientDesignation}</p>
                                                </div>

                                                <p className="md:text-lg lg:text-xl xl:text-2xl">
                                                    {item.clientReview}
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                        <div className="flex gap-3 mt-5">
                            <button className="swiper-button-prev">
                                <FaAngleLeft />
                            </button>
                            <button className="swiper-button-next">
                                <FaAngleRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HappyClients;