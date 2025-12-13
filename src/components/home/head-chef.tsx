import React from 'react';
import Image from 'next/image';
import { FaQuoteLeft } from "react-icons/fa6";
import headChef from '@/assets/images/head-chef.jpg';
import TopLeftStar from '@/assets/images/top-left-star-with-border.png';
import BottomRightStar from '@/assets/images/bottom-right-star-with-border.png';

const HeadChef = () => {
    return (
      <section className="bg-gradient-bl !pb-8">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-4 md:gap-14 lg:gap-6 items-center">
            <div
              className="space-y-4 md:space-y-6 lg:pr-20 mb-10 md:mb-0"
              data-aos="fade-up"
            >
              <h2 className="d2c_title">
                Our Spices: Handcrafted in <span>Champaran</span>
              </h2>
              <div className="space-y-4">
                <p>
                  Our spices are prepared using time‑honoured methods passed
                  down through generations, carefully ground, blended and
                  roasted to perfection.
                </p>
                <p>
                  Signature Champaran spice blends give our dishes their rich,
                  distinct flavour, crafted to complement every matka mutton and
                  chicken preparation.
                </p>
              </div>

              <div className="w-full lg:w-10/12 xl:w-8/12">
                <p className="text-accent text-xl-1 font-medium capitalize">
                  by_
                </p>
                <h4 className="text-accent text-end text-3xl 2xl:text-[45px] font-accent font-normal">
                  Ram Pratap Singh
                </h4>
                <h5 className="text-accent text-base-1 font-medium capitalize text-end">
                  Director
                </h5>
              </div>
            </div>

            <div className="relative h-[400px] md:h-[500px] 2xl:h-[560px] mx-2 md:mx-0">
              <Image
                src={headChef}
                alt="Head Chef Image"
                fill
                className="object-cover object-top rounded-lg z-10 relative"
                data-aos="fade-up"
                sizes="(min-width: 768px) 50vw, 100vw"
                priority
              />
              <Image
                src={TopLeftStar}
                alt="Star With border"
                className="absolute -top-6 -left-6 z-0"
                data-aos="fade-up"
              />
              <Image
                src={BottomRightStar}
                alt="Star With border"
                className="absolute -right-6 -bottom-6 z-0"
                data-aos="fade-up"
              />

              <div className="d2c_chef_quote" data-aos="fade-up">
                <div className="rounded bg-primary p-4 shadow-[-4px_4px_8px_0_#3b3d32]">
                  <span className="text-3xl text-accent">
                    <FaQuoteLeft />
                  </span>
                  <p className="text-sm font-medium">
                    The Original Taste of Champaran
                  </p>
                </div>
              </div>

              <div className="d2c_experience" data-aos="fade-down">
                <div className="rounded bg-primary p-4 shadow-[4px_-4px_8px_0_#3b3d32]">
                  <p className="md:text-2xl lg:text-3xl font-semibold">
                    25+ Years Experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default HeadChef;