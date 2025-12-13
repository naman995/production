'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaClock, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import topLeftStar from '@/assets/images/top-left-star-with-border.png';
import bottomRightStar from '@/assets/images/bottom-right-star-with-border.png';

type ContactFormInputs = {
    name: string;
    phoneNumber: string;
    peopleCount: number;
    message: string;
};

const Contact = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<ContactFormInputs>();

    const onSubmit = async () => {
        try {
            toast.success('Your information is submitted!');
            reset();
        } catch {
            toast.error('Something went wrong. Please try again.');
        }
    };

    return (
        <section className="bg-gradient-br" id="d2c_contact">
            <div className="container">
                <div className="d2c_section_header" data-aos="fade-up">
                    <h2 className="d2c_title">Contact <span>Us</span></h2>
                    <p>Write your name and phone number and we will call you back</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-4 md:gap-16 xl:gap-20 items-center" data-aos="fade-up">
                    <div className="d2c_map_wrapper relative mx-2 md:mx-0">
                        <iframe
                            className="w-full h-full rounded-lg brightness-50 border-0"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d65116640.85496207!2d-144.33246481144602!3d-5.038001129647539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80990aa1f8deb471%3A0xcf47038aaafc95b3!2sNevada%2C%20USA!5e0!3m2!1sen!2sbd!4v1739964393333!5m2!1sen!2sbd"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                        <Image
                            src={topLeftStar}
                            alt="Star With border"
                            className="absolute -top-6 -left-6 z-0"
                        />
                        <Image
                            src={bottomRightStar}
                            alt="Star With border"
                            className="absolute -right-6 -bottom-6 z-0"
                        />
                    </div>

                    <div className="space-y-8 order-1 lg:order-2">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your name here"
                                    {...register('name', { required: 'Name is required' })}
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                                )}

                                <input
                                    type="tel"
                                    className="form-control"
                                    placeholder="Enter your phone number"
                                    {...register('phoneNumber', { required: 'Phone number is required' })}
                                />
                                {errors.phoneNumber && (
                                    <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>
                                )}

                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Amount of people"
                                    {...register('peopleCount', { required: 'Number of people is required' })}
                                />
                                {errors.peopleCount && (
                                    <p className="text-red-500 text-sm mt-1">{errors.peopleCount.message}</p>
                                )}

                                <textarea
                                    className="form-control"
                                    placeholder="Enter your message"
                                    rows={1}
                                    {...register('message', { required: 'Message is required' })}
                                />
                                {errors.message && (
                                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                                )}
                            </div>

                            <button type="submit" className="d2c_btn cursor-pointer">Send message</button>
                        </form>


                        <ul className="d2c_contact_details space-y-4">
                            <li className="flex items-center">
                                <span className="mr-2"><FaClock className="w-5 h-5" /></span>
                                Working Hour: Monday - Sunday, 10.00 - 23.00
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2"><FaMapMarkerAlt className="w-5 h-5" /></span>
                                Address: 1772 Nevskaya Street NW, Suite 21389
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2"><FaEnvelope className="w-5 h-5" /></span>
                                <Link href="mailto:info@yummiyaam.com">Email: info@yummiyaam.com</Link>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2"><FaPhone className="w-5 h-5" /></span>
                                <Link href="tel:+3804844226">+380 484 4226 </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;