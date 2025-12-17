import React from "react";
import Image from "next/image";
import Link from "next/link";

import DiningTable from "@/assets/images/dining-table.jpg";
import TopLeftStar from "@/assets/images/top-left-star-with-border.png";
import BottomRightStar from "@/assets/images/bottom-right-star-with-border.png";
import Star1 from "@/assets/images/star-1.png";

const About = () => {
  return (
    <section className="bg-gradient-br" id="d2c_about">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-10 lg:gap-20">
          <div
            className="relative h-[300px] md:h-[500px] xl:h-[570px] mb-8 md:mb-0 mx-2 md:mx-0"
            data-aos="fade-up"
          >
            <Image
              src={DiningTable.src}
              layout="fill"
              objectFit="cover"
              className="rounded-lg z-10 relative"
              alt="Dine In Table"
            />
            <Image
              src={TopLeftStar.src}
              width={TopLeftStar.width}
              height={TopLeftStar.height}
              className="absolute -top-6 -left-6 z-0"
              alt="Star With border"
            />
            <Image
              src={BottomRightStar.src}
              width={BottomRightStar.width}
              height={BottomRightStar.height}
              className="absolute -right-6 -bottom-6 z-0"
              alt="Star With border"
            />
          </div>

          <div className="space-y-4 xl:space-y-6" data-aos="fade-up">
            <h2 className="d2c_title">
              About <span>us</span>
            </h2>
            <p>
              A Signature dish of old Champaran Bihar is an absolute delight for
              a non vegetarian The specialty of this dish is that it is prepared
              in an earthen pot is cooked for hours over charcoal
            </p>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div>
                  <Image
                    src={Star1.src}
                    width={Star1.width}
                    height={Star1.height}
                    alt="Star"
                  />
                </div>
                <h4 className="d2c_subtitle">Goals</h4>
              </div>
              <p>
                Since 2014, our journey has focused on preserving traditional
                recipes and slow coal-cooking techniques passed down through
                generations.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <div>
                  <Image
                    src={Star1.src}
                    width={Star1.width}
                    height={Star1.height}
                    alt="Star"
                  />
                </div>
                <h4 className="d2c_subtitle">Solutions</h4>
              </div>
              <p>
                From our signature Matka Mutton &amp; Chicken to eco‑friendly
                clay pots and leaf plates, we aim to make every meal a memorable
                experience for everyone.
              </p>
            </div>

            <Link
              href="https://wa.me/8882246241?text=Hi%20I%20want%20to%20know%20about%20franchise"
              target="_blank"
              rel="noopener noreferrer"
              className="d2c_btn"
            >
              {" "}
              Become a Franchise Partner{" "}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
