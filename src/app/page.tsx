// components
"use client";
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import SponsoredBy from "./sponsored-by";
import AboutEvent from "./about-event";
import OurStats from "./our-stats";
import EventContent from "./event-content";
import Faq from "./faq";
import Plinks from "../components/partners";
import Form from "@/components/form";
export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="my-24">
        <Plinks />
      </div>
      {/* <SponsoredBy /> */}
      <div className="w-fit mx-auto rounded-lg bg-[#b5d334]">
        <OurStats />
      </div>
      <AboutEvent />
      <EventContent />
      <div className="w-screen ">
        <Form />
      </div>
      <Faq />
      <div className="bg-[#b5d334]">
        <Footer />
      </div>
    </>
  );
}
