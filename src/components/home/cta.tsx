import React from 'react';
import Link from 'next/link';

const Cta = () => {
    return (
      <section className="cta_bg bg-cover bg-center">
        <div className="container">
          <div className="py-10 px-8 md:p-16 lg:p-20 xl:p-24 rounded-lg bg-gradient-tl text-center">
            <div className="space-y-6" data-aos="fade-up">
              <h2 className="d2c_title">
                How to <span>book a table</span>
              </h2>
              <p className="w-full md:w-10/12 2xl:w-7/12 mx-auto">
                We look forward to creating a memorable dining experience just
                for you reserve your table. Just by clicking the button below!
              </p>
              <Link
                href="https://wa.me/8882246241?text=Hi%20I%20want%20to%20Book%20Table"
                target="_blank"
                rel="noopener noreferrer"
                className="d2c_btn"
              >
                Book A Table
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Cta;