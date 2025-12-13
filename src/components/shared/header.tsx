'use client'
import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaX } from "react-icons/fa6";
import Logo from '@/assets/images/logo/Logo.png';
import NavBg from '@/assets/images/nav-bg.webp';

const Header = () => {
    const [isNavOpen, setIsNavOpen] = React.useState(false);
    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    useEffect(() => {
        const links = [
            { id: "d2c_hero", label: "Home" },
            { id: "d2c_about", label: "About" },
            { id: "d2c_main_dishes", label: "Services" },
            { id: "d2c_our_menu", label: "Skills" },
            { id: "d2c_our_chef", label: "Portfolio" },
            { id: "d2c_testimonial", label: "Awards" },
            { id: "d2c_faq", label: "Awards" },
            { id: "d2c_contact", label: "Awards" },
        ];
        const sections = links.map((link) => document.getElementById(link.id));
        const observerOptions = {
            root: null,
            rootMargin: "-50% 0px",
            threshold: [0]
        };

        const observer = new IntersectionObserver((entries) => {
            let visibleSection = null;
            let closestDistance = Number.MAX_VALUE;

            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const sectionRect = entry.target.getBoundingClientRect();
                    const sectionMiddle = sectionRect.top + sectionRect.height / 2;
                    const viewportMiddle = window.innerHeight / 2;
                    const distanceToViewportMiddle = Math.abs(sectionMiddle - viewportMiddle);
                    if (distanceToViewportMiddle < closestDistance) {
                        closestDistance = distanceToViewportMiddle;
                        visibleSection = entry.target.id;
                    }
                }
            });

            if (visibleSection) {
                const activeLinks = document.querySelectorAll(`a.nav_link[href="#${visibleSection}"]`);
                if (activeLinks.length > 0) {
                    const allNavLinks = document.querySelectorAll('a.nav_link');
                    allNavLinks.forEach(link => {
                        link.classList.remove('active');
                    });
                    activeLinks.forEach(activeLink => {
                        activeLink.classList.add('active');
                    });
                }
            }
        }, observerOptions);

        sections.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);
    return (
        <header className="sticky top-0 w-full" id="navbar">
            <nav className="d2c_navbar bg-gradient-bl">
                <div className="mr-auto flex justify-between items-center gap-3 lg:gap-6">
                    <div
                        className="flex items-center flex-row-reverse md:flex-row justify-between flex-wrap w-full container"
                    >
                        {/* Mobile and Tablet Menu Button */}
                        <div className="w-[30%] md:w-[30%] xl:w-[20%] flex justify-end md:!justify-start">
                            <button
                                onClick={toggleNav}
                                id="mobile-menu-btn"
                                className={`text-accent border-accent focus:outline-none transition-all duration-500 cursor-pointer w-10 md:w-12 h-10 md:h-12 rounded-xs text-2xl`}
                            >
                                {
                                    isNavOpen ? (
                                        <FaX className="m-auto" />
                                    ) : (
                                        <FaBars className="m-auto" />
                                    )
                                }
                            </button>
                        </div>

                        <div className="w-[90%] md:w-[40%] xl:w-[60%]">
                            <Link href="/" id="home-link" className="flex items-center justify-start md:justify-center">
                                <Image
                                    className="max-w-[250px]"
                                    src={Logo.src}
                                    width={Logo.width}
                                    height={Logo.height}
                                    alt="YummiYaam logo"
                                />
                            </Link>
                        </div>

                        <div className="hidden md:block md:w-[30%] xl:w-[20%] text-right">
                            <Link href="#d2c_book" className="d2c_btn d2c_btn_primary">
                                Book a table
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile and Tablet Navigation Drawer */}
            <div
                id="mobile-menu"
                style={{
                    backgroundImage: `url(${NavBg.src})`,
                }}
                className={`pt-28 pb-14 bg-cover bg-center ${isNavOpen ? 'show' : ''}`}
            >
                <div className="block p-6 pt-4 w-full">
                    {/* Mobile Navigation Links */}
                    <div
                        id="mobile-nav-links"
                        className="grid grid-cols-1 justify-center text-center gap-1 gap-x-4"
                    >
                        <Link href="#d2c_hero" onClick={toggleNav} className="nav_link nav_link_Small">Home</Link>
                        <Link href="#d2c_about" onClick={toggleNav} className="nav_link nav_link_Small">About</Link>
                        <Link href="#d2c_main_dishes" onClick={toggleNav} className="nav_link nav_link_Small">Main Dishes</Link>
                        <Link href="#d2c_our_menu" onClick={toggleNav} className="nav_link nav_link_Small">Our Menu</Link>
                        <Link href="#d2c_our_chef" onClick={toggleNav} className="nav_link nav_link_Small">Our Chef</Link>
                        <Link href="#d2c_faq" onClick={toggleNav} className="nav_link nav_link_Small">FAQ</Link>
                        <Link href="#d2c_testimonial" onClick={toggleNav} className="nav_link nav_link_Small">Testimonial</Link>
                        <Link href="#d2c_contact" onClick={toggleNav} className="nav_link nav_link_Small">Contact us</Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;