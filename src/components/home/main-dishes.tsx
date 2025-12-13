"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import MainDish1 from '@/assets/images/main-dish-1.jpg';
import MainDish2 from '@/assets/images/main-dish-2.jpg';
import MainDish3 from '@/assets/images/main-dish-3.jpg';
import MainDish4 from '@/assets/images/main-dish-4.jpg';
import MainDish5 from '@/assets/images/main-dish-5.jpg';

const dishItems = [
    {
        image: MainDish1.src,
        title: 'Calamari Rings',
        price: '29$/390g',
        description: 'Baked fish fillet',
    },
    {
        image: MainDish2.src,
        title: 'Garlic Butter Shrimp',
        price: '29$/390g',
        description: 'Garlic Butter Shrimps',
    },
    {
        image: MainDish3.src,
        title: 'baked fish fillet',
        price: '20$/390g',
        description: 'Baked fish fillet',
    },
    {
        image: MainDish4.src,
        title: 'Chicken Parmesan',
        price: '29$/390g',
        description: 'Chicken Parmesan',
    },
    {
        image: MainDish5.src,
        title: 'Grilled Ribeye Steak',
        price: '29$/390g',
        description: 'Grilled Ribeye Steak',
    }
]

const MainDishes = () => {
    const [activeDish, setActiveDish] = React.useState(-1);
    const dishesWrapperRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (
            dishesWrapperRef.current &&
            !dishesWrapperRef.current.contains(event.target as Node)
        ) {
            setActiveDish(-1);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleActiveDish = (index: number) => {
        if (activeDish === index) {
            setActiveDish(-1);
        } else {
            setActiveDish(index);
        }
    }
    return (
        <section className="bg-gradient-tr" id="d2c_main_dishes">
            <div className="container">
                <div className="d2c_section_header">
                    <h2 className="d2c_title" data-aos="fade-up">Main <span>dishes</span></h2>
                </div>
                <div className="flex flex-col md:flex-row gap-4 md:gap-0" data-aos="fade-up" ref={dishesWrapperRef}>
                    {
                        dishItems.map((item, index) => (
                            <div
                                onMouseEnter={() => toggleActiveDish(index)}
                                onClick={() => toggleActiveDish(index)}
                                onMouseLeave={() => setActiveDish(-1)}
                                className={`group d2c_dishes_wrapper ${activeDish === index ? 'w-full md:w-1/2' : ''}`} key={index}>
                                <Image
                                    src={item.image}
                                    className="rounded-lg h-full object-cover w-full"
                                    alt="Menu item image"
                                    width={500}
                                    height={300}
                                />
                                <div className={`d2c_content_wrapper ${activeDish === index ? 'opacity-100 bottom-0' : ''}`}>
                                    <h4 className="text-2xl-1">{item.title}</h4>
                                    <p>{item.price}</p>
                                    <p className="text-accent">{item.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default MainDishes;