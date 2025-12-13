import React from 'react';
import Image from 'next/image';
import Chef1 from '@/assets/images/chefs-1.jpg';
import Chef2 from '@/assets/images/chefs-2.jpg';
import Chef3 from '@/assets/images/chefs-3.jpg';
import Chef4 from '@/assets/images/chefs-4.jpg';
import TopLeftBorder from '@/assets/images/top-left-star-with-border.png';
import BottomRightBorder from '@/assets/images/bottom-right-star-with-border.png';



const OurChefs = () => {
    return (
        <section className="bg-gradient-br" id="d2c_our_chef">
            <div className="container">
                <div className="d2c_section_header">
                    <h2 className="d2c_title" data-aos="fade-up">Our <span>chefs</span></h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-14">
                    <div className="space-y-10 mx-2 md:mx-0" data-aos="fade-up">
                        <div className="d2c_chef_wrapper">
                            <Image src={Chef1.src} width={Chef1.width} height={Chef1.height}
                                className="w-full h-full object-top object-cover rounded-lg z-10 relative"
                                alt="Dine In Table" />
                            <Image src={TopLeftBorder.src} width={TopLeftBorder.width} height={TopLeftBorder.height}
                                className="absolute -top-6 -left-6 z-0" alt="Star With border" />
                            <Image src={BottomRightBorder.src} width={BottomRightBorder.width} height={BottomRightBorder.height}
                                className="absolute -right-6 -bottom-6 z-0" alt="Star With border" />
                        </div>
                        <div className="space-y-2">
                            <p className="text-accent text-base xl:text-base-1">Master Chef</p>
                            <h4 className="text-xl xl:text-2xl-1">Wade Warren</h4>
                        </div>
                    </div>
                    <div className="space-y-10 mx-2 md:mx-0" data-aos="fade-up">
                        <div className="d2c_chef_wrapper">
                            <Image src={Chef2.src} width={Chef2.width} height={Chef2.height}
                                className="w-full h-full object-top object-cover rounded-lg z-10 relative"
                                alt="Dine In Table" />
                            <Image src={TopLeftBorder.src} width={TopLeftBorder.width} height={TopLeftBorder.height}
                                className="absolute -top-6 -left-6 z-0" alt="Star With border" />
                            <Image src={BottomRightBorder.src} width={BottomRightBorder.width} height={BottomRightBorder.height}
                                className="absolute -right-6 -bottom-6 z-0" alt="Star With border" />
                        </div>
                        <div className="space-y-2">
                            <p className="text-accent text-base xl:text-base-1">Chief Chef</p>
                            <h4 className="text-2xl lg:text-xl xl:text-2xl-1">Jane Cooper</h4>
                        </div>
                    </div>
                    <div className="space-y-10 mx-2 md:mx-0" data-aos="fade-up">
                        <div className="d2c_chef_wrapper">
                            <Image src={Chef3.src} width={Chef3.width} height={Chef3.height}
                                className="w-full h-full object-top object-cover rounded-lg z-10 relative"
                                alt="Dine In Table" />
                            <Image src={TopLeftBorder.src} width={TopLeftBorder.width} height={TopLeftBorder.height}
                                className="absolute -top-6 -left-6 z-0" alt="Star With border" />
                            <Image src={BottomRightBorder.src} width={BottomRightBorder.width} height={BottomRightBorder.height}
                                className="absolute -right-6 -bottom-6 z-0" alt="Star With border" />
                        </div>
                        <div className="space-y-2">
                            <p className="text-accent text-base xl:text-base-1">Executive Chef</p>
                            <h4 className="text-2xl lg:text-xl xl:text-2xl-1">Esther Howard</h4>
                        </div>
                    </div>
                    <div className="space-y-10 mx-2 md:mx-0" data-aos="fade-up">
                        <div className="d2c_chef_wrapper">
                            <Image src={Chef4.src} width={Chef4.width} height={Chef4.height}
                                className="w-full h-full object-top object-cover rounded-lg z-10 relative"
                                alt="Dine In Table" />
                            <Image src={TopLeftBorder.src} width={TopLeftBorder.width} height={TopLeftBorder.height}
                                className="absolute -top-6 -left-6 z-0" alt="Star With border" />
                            <Image src={BottomRightBorder.src} width={BottomRightBorder.width} height={BottomRightBorder.height}
                                className="absolute -right-6 -bottom-6 z-0" alt="Star With border" />
                        </div>
                        <div className="space-y-2">
                            <p className="text-accent text-base xl:text-base-1">
                                Food Service Manager
                            </p>
                            <h4 className="text-2xl lg:text-xl xl:text-2xl-1">Jenny Wilson</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurChefs;