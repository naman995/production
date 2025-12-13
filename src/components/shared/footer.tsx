import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FooterLogo from '@/assets/images/logo/footer-logo.png';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, FaPhone, FaEnvelope, FaStreetView } from 'react-icons/fa';

// ... existing code ...

const Footer = () => {
    return (
        <footer className="bg-gradient-tr  pt-14 xl:pt-16 2xl:pt-24">
            <div className="container">
                <div className="grid grid-cols-12 gap-4 md:gap-6 pb-10 lg:pb-16">
                    <div
                        className="col-start-1 col-span-12 lg:col-span-6 xl:col-span-6 space-y-4 mb-8 lg:mb-0 md:text-center lg:text-left">
                        <Link href="/">
                            <Image
                                src={FooterLogo}
                                alt="Footer Logo"
                                className="max-w-[307px] mb-8 md:mx-auto lg:mx-0"
                                width={307}
                                height={100} // adjust based on actual image ratio
                            />
                        </Link>
                        <p className="lg:max-w-[80%] 2xl:max-w-[50%]">
                            Learn To Love Growth And Change And You Will Be A Success.
                        </p>
                        <div className="d2c_social_link space-x-2">
                            <Link href="#"><FaFacebookF /></Link>
                            <Link href="#"><FaLinkedinIn /></Link>
                            <Link href="#"><FaTwitter /></Link>
                            <Link href="#"><FaYoutube /></Link>
                        </div>
                    </div>

                    <div
                        className="col-start-1 col-span-12 md:col-span-4 lg:col-start-7 lg:col-span-2 xl:col-start-7 lg: xl:col-span-3">
                        <ul className="space-y-3 d2c_footer_link">
                            <li>
                                <Link href="#index" className="d2c_footer_link">Home</Link>
                            </li>
                            <li>
                                <Link href="#d2c_about" className="d2c_footer_link">About</Link>
                            </li>
                            <li>
                                <Link href="#d2c_main_dishes" className="d2c_footer_link">Dishes</Link>
                            </li>
                            <li>
                                <Link href="#d2c_our_chef" className="d2c_footer_link">Team</Link>
                            </li>
                            <li>
                                <Link href="#d2c_testimonial" className="d2c_footer_link">Testimonial</Link>
                            </li>
                        </ul>
                    </div>

                    <div
                        className="col-start-1 col-span-12 md:col-start-5 md:col-span-8 lg:col-start-9 lg:col-span-4 xl:col-start-10 lg: xl:col-span-3">
                        <ul className="d2c_contact_details space-y-4 mt-4 md:mt-0">
                            <li>
                                <span><FaPhone /></span>
                                <Link href="tel:+3804844226">+380 484 4226 </Link>
                            </li>
                            <li>
                                <span><FaEnvelope /></span>
                                <Link href="mailto:info@yummiyaam.com">info@yummiyaam.com</Link>
                            </li>
                            <li>
                                <span><FaStreetView /></span>
                                1772 Nevskaya Street NW, Suite 21389
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="d2c_copyright">
                    <div className="col-start-1 text-center md:text-left col-span-12 md:col-span-7">
                        <p className="text-[#757575]">
                            Copyright © DesignToCodes. All Right Reserved
                        </p>
                    </div>
                    <div className="col-start-1 md:col-start-8 col-span-12 md:col-span-5">
                        <ul className="flex justify-center md:justify-end gap-6">
                            <li><Link href="#">Privacy Policy</Link></li>
                            <li><Link href="#">Terms & Condition</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;