'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

type BookingFormInputs = {
    name: string;
    phoneNumber: string;
    peopleCount: number;
};

const BookingTable = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<BookingFormInputs>();

    const onSubmit = async () => {
        try {
          toast.success('Your information is submitted!');
          reset();
        } catch {
          toast.error('Something went wrong. Please try again.');
        }
      };

    return (
        <section className="bg-gradient-tr" id="d2c_book">
            <div className="container">
                <div className="p-8 md:p-14 xl:p-20 2xl:p-24 rounded-lg bg-gradient-tl text-center" data-aos="fade-up">
                    <div className="d2c_section_header">
                        <h2 className="d2c_title">Book a <span>table</span></h2>
                        <p>Write your name and phone number and we will call you back</p>
                    </div>

                    <form className="mt-6 w-full space-y-10" onSubmit={handleSubmit(onSubmit)}>
                        <div className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    className={`form-control ${errors.name ? 'border-red-500' : ''}`}
                                    placeholder="Enter your name here"
                                    {...register('name', { 
                                        required: 'Name is required' 
                                    })}
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-sm mt-1 text-left">{errors.name.message}</p>
                                )}
                            </div>

                            <div>
                                <input
                                    type="tel"
                                    className={`form-control ${errors.phoneNumber ? 'border-red-500' : ''}`}
                                    placeholder="Enter your phone number"
                                    {...register('phoneNumber', { 
                                        required: 'Phone number is required' 
                                    })}
                                />
                                {errors.phoneNumber && (
                                    <p className="text-red-500 text-sm mt-1 text-left">{errors.phoneNumber.message}</p>
                                )}
                            </div>

                            <div>
                            <input 
                                    type="number" 
                                    className={`form-control ${errors.peopleCount ? 'border-red-500' : ''}`} 
                                    placeholder="Amount of people" 
                                    {...register('peopleCount', { 
                                        required: 'Number of people is required'
                                    })} 
                                />
                                {errors.peopleCount && (
                                    <p className="text-red-500 text-sm mt-1 text-left">{errors.peopleCount.message}</p>
                                )}
                            </div>
                        </div>
                        <button type="submit" className="d2c_btn cursor-pointer">Book now</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default BookingTable;