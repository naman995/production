import About from "@/components/home/about";
import BookingTable from "@/components/home/booking-table";
import Contact from "@/components/home/contact";
import Cta from "@/components/home/cta";
import FAQ from "@/components/home/faq";
import HappyClients from "@/components/home/happy-clients";
import HeadChef from "@/components/home/head-chef";
import Hero from "@/components/home/hero";
import MainDishes from "@/components/home/main-dishes";
import OurChefs from "@/components/home/our-chefs";
import OurMenu from "@/components/home/our-menu";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <MainDishes />
      <Cta />
      <HeadChef />
      <OurMenu />
      <OurChefs />
      <BookingTable />
      <FAQ />
      <HappyClients />
      <Contact />
    </>
  );
}
