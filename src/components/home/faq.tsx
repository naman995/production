'use client';

import React, { useEffect, useRef, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);
    const contentRefs = useRef<Array<HTMLDivElement | null>>([]);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    useEffect(() => {
        contentRefs.current.forEach((content: HTMLDivElement | null, index: number) => {
            if (content instanceof HTMLDivElement) {
                content.style.maxHeight =
                    activeIndex === index ? `${content.scrollHeight}px` : '0px';
            }
        });        
    }, [activeIndex]);

    return (
        <section className="bg-gradient-bl" id="d2c_faq">
            <div className="container space-y-10">
                <div className="d2c_section_header">
                    <h2 className="d2c_title" data-aos="fade-up">
                        Frequently asked <span>question</span>
                    </h2>
                </div>

                <div className="mb-6 rounded w-full lg:w-[80%] mx-auto space-y-4">
                    {accordionData.map((item, index) => (
                        <div
                            key={index}
                            className="wow fadeInUp border border-[#2a3d43] rounded-lg border-dashed bg-[linear-gradient(to_bottom,_#152A32_0%,_#232C2F_95%)]"
                            data-wow-delay={`${0.2 * (index + 1)}s`}
                            data-aos="fade-up"
                        >
                            <div
                                className={`accordion-header ${activeIndex === index ? 'active' : ''}`}
                                onClick={() => toggleAccordion(index)}
                            >
                                <h4 className="d2c_subtitle leading-normal">{item.question}</h4>
                                <span className={`text-accent transition-transform duration-500 ${activeIndex === index ? 'rotate-180' : ''}`}>
                                    <FaChevronDown />
                                </span>
                            </div>
                            <div
                                ref={(el) => {
                                    contentRefs.current[index] = el;
                                }}
                                className="accordion-content overflow-hidden transition-max-height duration-300 ease-out px-4 md:px-0"
                            >
                                {item.answers.map((answer, i) => (
                                    <p key={i} className="d2c_answer">
                                        {answer}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const accordionData = [
    {
        question: "Do you help with relocation?",
        answers: [
            "Do you sometimes have the feeling that you're running into the same obstacles over and over again? Many of my conflicts have the same feel to them, like “Hey, I think I've been here before,” but I can't figure out how I wound up in the same place.",
            "The situation is different, but the conflict feels the same. I first read this poem in “The Tibetan Book of Living and Dying” by Sogyal Rinpoche..."
        ]
    },
    {
        question: "How does your hiring process work?",
        answers: [
            "Do you sometimes have the feeling that you're running into the same obstacles over and over again? Many of my conflicts have the same feel to them..."
        ]
    },
    {
        question: "Do you have an internship program?",
        answers: [
            "Do you sometimes have the feeling that you're running into the same obstacles over and over again?"
        ]
    },
    {
        question: "What are your working hours?",
        answers: [
            "Do you sometimes have the feeling that you're running into the same obstacles over and over again?"
        ]
    }
];

export default FAQ;
