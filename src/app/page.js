"use client";
import Project from "@/components/Home/05Project/Project";
import Testimonial from "@/components/Home/01Testimonial/Testimonial";
import Contact from "@/components/Home/02Contact/Contact";
import SDLC from "@/components/Home/03SDLC/SDLC";
import Services from "@/components/Home/04Services/Services";
import Portfolio from "@/components/Home/05Portfolio/Portfolio";
import Industries from "@/components/Home/06Industries/Industries";
import Differ from "@/components/Home/07Differ/Differ";
import Hero from "@/components/Home/08Hero/Hero";
import ContactInfo from "@/components/ContactUs/ContactInfo/ContactInfo";

export default function Home() {
  return (
    <>
      <Hero />   
      <Differ /> 
      <Services /> 
      {/* <Portfolio />  */}
      {/* <Contact /> */}
      <Industries />
      <SDLC /> 
      <Project />
      <Testimonial />
      <ContactInfo />
    </>
  );
}
