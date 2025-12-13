import React from 'react';
import Image from 'next/image';
import MenuItem1 from '@/assets/images/menu-item-1.jpg';
import MenuItem2 from '@/assets/images/menu-item-2.jpg';
import MenuItem3 from '@/assets/images/menu-item-3.jpg';
import MenuItem4 from '@/assets/images/menu-item-4.jpg';
import MenuItem5 from '@/assets/images/menu-item-5.jpg';

const OurMenu = () => {
    return (
        <section className="bg-gradient-tl" id="d2c_our_menu">
            <div className="container">
                <div className="d2c_section_header">
                    <h2 className="d2c_title" data-aos="fade-up">Our <span>menu</span></h2>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="relative group overflow-hidden transition-all h-[220px] lg:h-[300px]" data-aos="fade-up">
                                <Image
                                    src={MenuItem1}
                                    alt="Calamari Rings"
                                    fill
                                    className="rounded-lg object-cover"
                                />
                                <div className="d2c_menu_content">
                                    <h4 className="text-base xl:text-2xl 2xl:text-2xl-1">Calamari Rings</h4>
                                    <p className="text-sm xl:text-base-1">29$/390g</p>
                                    <p className="d2c_hover_content">Baked fish fillet</p>
                                </div>
                            </div>

                            <div className="relative group overflow-hidden h-[220px] lg:h-[300px]" data-aos="fade-up">
                                <Image
                                    src={MenuItem2}
                                    alt="BBQ Pulled"
                                    fill
                                    className="rounded-lg object-cover"
                                />
                                <div className="d2c_menu_content">
                                    <h4 className="text-base xl:text-2xl 2xl:text-2xl-1">BBQ Pulled</h4>
                                    <p className="text-sm xl:text-base-1">29$/390g</p>
                                    <p className="d2c_hover_content">Bbq pulled</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative group overflow-hidden h-[300px] lg:h-[380px]" data-aos="fade-up">
                            <Image
                                src={MenuItem4}
                                alt="Baked Fish Fillet"
                                fill
                                className="rounded-lg object-cover"
                            />
                            <div className="d2c_menu_content">
                                <h4 className="text-base xl:text-2xl 2xl:text-2xl-1">Baked Fish Fillet</h4>
                                <p className="text-sm xl:text-base-1">21$/390g</p>
                                <p className="d2c_hover_content">Baked fish fillet</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="relative group overflow-hidden h-[300px] lg:h-[380px]" data-aos="fade-up">
                            <Image
                                src={MenuItem3}
                                alt="Greek Goddess Salad"
                                fill
                                className="rounded-lg object-cover"
                            />
                            <div className="d2c_menu_content">
                                <h4 className="text-base xl:text-2xl 2xl:text-2xl-1">Greek Goddess Salad</h4>
                                <p className="text-sm xl:text-base-1">40$/390g</p>
                                <p className="d2c_hover_content">Greek Goddess Salad</p>
                            </div>
                        </div>

                        <div className="relative group overflow-hidden h-[220px] lg:h-[300px]" data-aos="fade-up">
                            <Image
                                src={MenuItem5}
                                alt="Calamari Rings"
                                fill
                                className="rounded-lg object-cover"
                            />
                            <div className="d2c_menu_content">
                                <h4 className="text-base xl:text-2xl 2xl:text-2xl-1">Calamari Rings</h4>
                                <p className="text-sm xl:text-base-1">6$/390g</p>
                                <p className="d2c_hover_content">Grilled lemon herb chicken</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurMenu;
